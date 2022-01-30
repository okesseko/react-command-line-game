import boxen from "boxen";
import inquirer from "inquirer";
import answerHandler from "../utils/answerHandler.mjs";
import { X_VARIABLE } from "../constants/properNounColor.mjs";

async function question4() {
  const answer = await inquirer.prompt({
    name: "question-4",
    type: "rawlist",
    message: `We should add ${X_VARIABLE} to identify each element.\n  When rendering multiple components.\n  The ${X_VARIABLE} is?\n\n  Example:\n${boxen(
      `const numbers = [1, 2, 3, 4, 5];\nconst listItems = numbers.map((number) =>\n    <li ${X_VARIABLE}={number.toString()}>{number}</li>\n);`,
      { padding: 1 }
    )}
      \n`,
    choices: ["id", "uuid", "key"],
  });

  return answerHandler(answer["question-4"] === "key");
}

export default question4;
