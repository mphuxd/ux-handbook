import React from "react";

function Question({ question }) {
  let questionParsed = question.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "-").toLowerCase();
  return <a href={`#${questionParsed}`}>{question}</a>;
}
export default Question;
