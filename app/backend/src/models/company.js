import Joi from "joi";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Company Mongoose schema
const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  shortDescription: {
    type: String,
    required: true,
    maxlength: 200,
  },
  longDescription: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/.*\.(jpg|jpeg|png|gif)$/.test(v);
      },
      message: "Invalid thumbnail URL",
    },
  },
  logo: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/.*\.(jpg|jpeg|png|gif)$/.test(v);
      },
      message: "Invalid logo URL",
    },
  },
  address: {
    type: String,
    required: true,
    maxlength: 300,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v);
      },
      message: "Phone number must be 10 digits",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Company model
const Company = model("company", companySchema);

// Joi validation schema for requests
const companySchemaValidation = {
  body: Joi.object({
    name: Joi.string().min(3).max(100).required(),
    shortDescription: Joi.string().max(200).required(),
    longDescription: Joi.string().max(1000).required(),
    thumbnail: Joi.string()
      .uri()
      .regex(/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/)
      .required(),
    logo: Joi.string()
      .uri()
      .regex(/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/)
      .required(),
    address: Joi.string().max(300).required(),
    phone: Joi.string().regex(/^[0-9]{10}$/).required(),
  }),
};

export { Company, companySchemaValidation };
