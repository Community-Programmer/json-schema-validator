import Ajv2020, { AnySchema } from "ajv/dist/2020";

interface ValidationResult {
  isValid: boolean;
  message: string;
}

export const handleJsonValidation = (
  schemaInput: AnySchema,
  jsonInput: string
): ValidationResult => {
  const ajv = new Ajv2020();
  const validate = ajv.compile(schemaInput);
  const isValidJsonSchema = validate(jsonInput);

  if (isValidJsonSchema) {
    return { isValid: true, message: "Json Validation success" };
  } else {
    console.log("Validation Errors:", validate.errors![0]);
    const errorObj = validate.errors![0];
    return {
      isValid: false,
      message: `${errorObj.schemaPath} ${errorObj.instancePath} ${errorObj.keyword} ${errorObj.message}`,
    };
  }
};
