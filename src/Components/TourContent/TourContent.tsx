import React from "react";
import "./TourContent.scss";

interface Content {
  title: string;
  description: string;
  codeBlock?: JSX.Element;
}

interface TourContentProps {
  tourContent: {
    lessonNumber: string;
    title: string;
    description: string | JSX.Element;
    task?: string;
    content: Content[];
  };
}

const TourContent: React.FC<TourContentProps> = ({ tourContent }) => {
  return (
    <main className="tour__text__Container">
      <h2>{tourContent.lessonNumber}</h2>
      <h3>{tourContent.title}</h3>

      <p>{tourContent.description}</p>

      {tourContent.content.map((tour) => {
        return (
          <>
            <h3>{tour.title}</h3>
            <p>{tour.description}</p>
            {tour.codeBlock}
          </>
        );
      })}

      <h3>Task</h3>
      <p>{tourContent.task}</p>
    </main>
  );
};

export default TourContent;
