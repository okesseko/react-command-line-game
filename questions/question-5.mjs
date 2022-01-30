import inquirer from "inquirer";
import answerHandler from "../utils/answerHandler.mjs";
import { REACT } from "../constants/properNounColor.mjs";

async function question5() {
  const answer = await inquirer.prompt({
    name: "question-5",
    type: "rawlist",
    message: `${REACT} provides two different ways to write components.\n  Which way is not?\n`,
    choices: ["Number", "Function", "Class"],
  });

  return answerHandler(answer["question-5"] === "Number");
}

export default question5;
