import React, { useEffect, useState } from "react";
import "./Tour.scss";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-json";
import { handleSchemaValidation } from "../../libs/schemaValidation";
import { handleJsonValidation } from "../../libs/jsonValidation";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { tourContent } from "../../Data/TourContent";
import TourContent from "../../Components/TourContent/TourContent";

interface ValidationResult {
  isValid: boolean;
  message: string;
}

const Tour: React.FC = () => {
  const [schemaInput, setSchemaInput] = useState<string>("");
  const [jsonInput, setJsonInput] = useState<string>("");

  const [schemavalidationResult, setSchemaValidationResult] =
    useState<ValidationResult>();
  const [jsonvalidationResult, setJsonValidationResult] =
    useState<ValidationResult>();

  const onschemaInputChange = async (newValue: string) => {
    setSchemaInput(newValue);
  };

  const onjsonInputChange = (newValue: string) => {
    setJsonInput(newValue);
  };

  useEffect(() => {
    const validateScheme = async () => {
      try {
        const schema = JSON.parse(schemaInput);
        const validation = await handleSchemaValidation(schema);
        setSchemaValidationResult(validation);
      } catch (error) {
        if (error instanceof SyntaxError) {
          console.error("Error parsing JSON:", error.message);
          setSchemaValidationResult({
            isValid: false,
            message: " json parsing error",
          });
        } else {
          setSchemaValidationResult({
            isValid: false,
            message: "Json Schema is inValid",
          });
        }
      }
    };

    if (schemaInput) {
      validateScheme();
    }
  }, [schemaInput]);

  useEffect(() => {
    if (schemaInput && jsonInput) {
      try {
        const schema = JSON.parse(schemaInput);
        const jsonSchema = JSON.parse(jsonInput);
        const validation = handleJsonValidation(schema, jsonSchema);
        setJsonValidationResult(validation);
      } catch (error) {
        console.log(error);
        if (schemavalidationResult?.isValid) {
          setJsonValidationResult({
            isValid: false,
            message: "json parsing error",
          });
        }
      }
    }
  }, [schemaInput, jsonInput, schemavalidationResult?.isValid]);

  const [contentIndex, setContentIndex] = useState<number>(0);
  const contents = tourContent;

  const handleNextClick = () => {
    setContentIndex((prevIndex) =>
      prevIndex === contents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousClick = () => {
    setContentIndex((prevIndex) =>
      prevIndex === 0 ? contents.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="tour__main__Section">
      <div className="text__Section">
        <div className="text__Section__content">
          <TourContent tourContent={contents[contentIndex]} />
        </div>
        <div className="text__Section_btn">
          {contentIndex !== 0 && (
            <button onClick={handlePreviousClick}>
              <FaArrowLeft fontSize={15} />
              Previous
            </button>
          )}
          {contentIndex < contents.length - 1 && (
            <button onClick={handleNextClick}>
              Next
              <FaArrowRight fontSize={15} />
            </button>
          )}
        </div>
      </div>

      <div className="editor__Section">
        <div className="jsonSchema__Editor">
          <div className="jsonSchema__Editor__console">
            <h3>Json Schema </h3>
            <span
              className={`${
                schemavalidationResult?.isValid ? "valid" : "invalid"
              }`}
            >
              {schemavalidationResult?.message}
            </span>
          </div>

          <AceEditor
            placeholder="Write Schema Json Here..."
            mode="json"
            theme="monokai"
            name="blah2"
            onChange={onschemaInputChange}
            fontSize={16}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={schemaInput}
            className="jsonSchema-ace-editor"
            setOptions={{ useWorker: false }}
          />
        </div>

        <div className="json__Editor">
          <h3>Json Input</h3>
          <AceEditor
            placeholder="Write Json Here..."
            mode="json"
            theme="monokai"
            name="blah2"
            onChange={onjsonInputChange}
            fontSize={16}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={jsonInput}
            className="json-ace-editor"
            setOptions={{ useWorker: false }}
          />
        </div>

        <div className="message__section">
          <span
            className={`${jsonvalidationResult?.isValid ? "valid" : "invalid"}`}
          >
            {jsonvalidationResult?.message}
          </span>
        </div>
      </div>
    </main>
  );
};

export default Tour;
