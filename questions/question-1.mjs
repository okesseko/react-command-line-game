import inquirer from "inquirer";
import answerHandler from "../utils/answerHandler.mjs";
import { REACT } from "../constants/properNounColor.mjs";

async function question1() {
  const answer = await inquirer.prompt({
    name: "question-1",
    type: "rawlist",
    message: `What is ${REACT} ?\n`,
    choices: ["framework", "language", "library"],
  });

  return answerHandler(answer["question-1"] === "library");
}

export default question1;
