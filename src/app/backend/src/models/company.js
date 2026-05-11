import Joi from "joi";
import mongoose from "mongoose";
const { Schema, model } = mongoose;
const galleryItemSchema = new Schema({
  url: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/[^\s]+$/.test(v);
      },
      message: "Invalid gallery image URL",
    },
  },
  caption: { type: String, maxlength: 200, default: "" },
  order: { type: Number, default: 0 },
});
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
        return /^https?:\/\/[^\s]+$/.test(v);
      },
      message: "Invalid thumbnail URL",
    },
  },
  logo: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/[^\s]+$/.test(v);
      },
      message: "Invalid logo URL",
    },
  },
  gallery: {
    type: [galleryItemSchema],
    default: [],
  },
  address: {
    type: String,
    required: true,
    maxlength: 300,
  },
  phone: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Company model
const Company = mongoose.models?.company || model("company", companySchema);
const galleryItemValidation = Joi.object({
  url: Joi.string()
    .uri()
    .regex(/^https?:\/\/[^\s]+$/)
    .required(),
  caption: Joi.string().max(200).allow(""),
  order: Joi.number().integer().min(0).default(0),
});
// Joi validation schema for requests
const companySchemaValidation = {
  body: Joi.object({
    name: Joi.string().min(3).max(100).required(),
    shortDescription: Joi.string().max(200).required(),
    longDescription: Joi.string().max(1000).required(),
    thumbnail: Joi.string()
      .uri()
      .regex(/^https?:\/\/[^\s]+$/)
      .required(),
    logo: Joi.string()
      .uri()
      .regex(/^https?:\/\/[^\s]+$/)
      .required(),
    address: Joi.string().max(300).required(),
    phone: Joi.string(),
    rating: Joi.number().min(0).max(5).default(0),
    gallery: Joi.array().items(galleryItemValidation).max(20).default([])
  }),
};

export { Company, companySchemaValidation };
