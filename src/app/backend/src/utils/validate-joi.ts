import Joi from "joi";

type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: Record<string, string> };

export function validateJoi<T>(
  schema: Joi.ObjectSchema,
  payload: unknown
): ValidationResult<T> {
  const { error, value } = schema.validate(payload, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (!error) {
    return { success: true, data: value };
  }

  const errors: Record<string, string> = {};

  for (const detail of error.details) {
    const key = detail.path[0]?.toString() || "unknown";
    errors[key] = detail.message;
  }

  return { success: false, errors };
}
