import { JSONSchemaType } from "ajv";
import Ajv2020 from "ajv/dist/2020";

interface ValidationResult {
  isValid: boolean;
  message: string;
}

export const handleSchemaValidation = async (
  schema: JSONSchemaType<unknown>
): Promise<ValidationResult> => {
  const ajv = new Ajv2020();
  console.log(schema);
  const isValid = await ajv.validateSchema(schema);

  if (isValid) {
    return { isValid: true, message: "Json Schema is Valid" };
  }
  return { isValid: false, message: "Json Schema is inValid" };
};
