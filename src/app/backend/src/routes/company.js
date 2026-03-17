import express from 'express';
import { Company, companySchemaValidation } from '../models/company.js'; // Correct import
import mongoose from 'mongoose';
import validate from '../utils/validate.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import asyncMiddleware from '../middlewares/async-middleware.js';

const companyRouter = express.Router();

// Get all companies
companyRouter.get('/', asyncMiddleware(async (req, res) => {
  try {
    const companies = await Company.find().sort('-createdAt');
    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error('Error fetching companies:', err);
  }
}));

// Get a single company by ID
companyRouter.get('/:id', validate(companySchemaValidation), async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const companyData = await Company.findById(id);

    if (!companyData) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json(companyData);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error('Error fetching company:', err);
  }
});

// Create a new company
companyRouter.post('/', authMiddleware, validate(companySchemaValidation), async (req, res) => {
  const validatedBody = req.validatedBody;

  // Check if logo and thumbnail URLs are valid
  if (!validatedBody.logo || !validatedBody.thumbnail) {
    return res.status(400).json({ message: 'Logo and Thumbnail are required' });
  }

  try {
    // Create a new company instance
    const newCompany = new Company({ ...validatedBody });

    // Save the company
    await newCompany.save();

    // Send the response with the created company
    res.status(201).json(newCompany);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error('Error creating company:', err);
  }
});

export default companyRouter;
