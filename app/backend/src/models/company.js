import Joi from "joi";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

//Company Mongoose schema
const companySchema = new Schema({

});

// Movie model
const company  = model("company", companySchema);

// Joi validation schema for requests
const companySchemaValidation = {
  body: Joi.object({

  }),
};

export { company, companySchema };
