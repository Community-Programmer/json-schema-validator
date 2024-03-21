import { CopyBlock, hybrid } from "react-code-blocks";

export const tourContent = [
  {
    lessonNumber: "Lesson 1",
    title: "Introduction to JSON Schema",
    description: (
      <p>
        JSON Schema is a vocabulary that allows you to annotate and validate
        JSON documents. It provides a way to describe the structure of JSON data
        for various purposes, such as ensuring data consistency, defining data
        types, and validating JSON data against predefined constraints. For more
        information, check out the{" "}
        <a href="https://json-schema.org/" target="_blank" rel="noreferrer">
          JSON Schema website
        </a>
        .
      </p>
    ),
    task: "Copy paste the above schema in json schema for validation",
    content: [
      {
        title: "Basic schema",
        description:
          "The most basic schema is a blank JSON object, which constrains nothing, allows anything, and describes nothing:",
        codeBlock: (
          <CopyBlock text={"{}"} language={"javascript"} theme={hybrid} />
        ),
      },
      {
        title: "",
        description:
          "By adding validation keywords to the schema, you can apply constraints to an instance. For example, you can use the type keyword to constrain an instance to an object, array, string, number, boolean, or null:",
        codeBlock: (
          <CopyBlock
            text={'{ "type": "string" }'}
            language={"javascript"}
            theme={hybrid}
          />
        ),
      },
      {
        title: "",
        description:
          "JSON Schema is hypermedia-ready and ideal for annotating your existing JSON-based HTTP API. JSON Schema documents are identified by URIs, which can be used in HTTP link headers and within JSON Schema documents to allow for recursive definitions.",
      },
    ],
  },
  {
    lessonNumber: "Implementation",
    title: "Json Schema",
    description:
      "In JSON Schema terminology, $schema and $id are schema keywords, title and description are schema annotations, and type is a validation keyword.",
    task: "For this task, you'll need to provide a JSON Schema that conforms to the Draft 2020-12 standards. This means that your schema should be compatible with the specifications and requirements outlined in the Draft 2020-12 version of JSON Schema.You can use above example for reference",
    content: [
      {
        title: "Example",
        description: "",
        codeBlock: (
          <CopyBlock
            text={
              '{\n\t"$schema": "https://json-schema.org/draft/2020-12/schema",\n\t"type": "object",\n\t"properties": {\n\t\t"name": {\n\t\t\t"type": "string"\n\t\t},\n\t\t"age": {\n\t\t\t"type": "number"\n\t\t}\n\t},\n\t"required": ["name", "age"]\n}'
            }
            language={"javascript"}
            theme={hybrid}
          />
        ),
      },
    ],
  },
  {
    lessonNumber: "Implementation",
    title: "Json validation",
    description: "",
    task: "Provide a JSON Schema that accurately describes an array containing items of type number, and then validate it using our platform. You can use above example for reference",
    content: [
      {
        title: "Example",
        description: "",
        codeBlock: (
          <CopyBlock
            text={`{\n\t"name": "John Doe",\n\t"age": 30\n}`}
            language={"javascript"}
            theme={hybrid}
          />
        ),
      },
    ],
  },
];
