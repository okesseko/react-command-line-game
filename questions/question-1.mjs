import inquirer from "inquirer";
import answerHandler from "../utils/answerHandler.mjs";
import { REACT } from "../constants/properNounColor.mjs";

async function question1(userName, addToFailList) {
  const answer = await inquirer.prompt({
    name: "question-1",
    type: "rawlist",
    message: `Q1: What is ${REACT} ?\n`,
    choices: ["framework", "language", "library"],
  });

  return answerHandler(
    answer["question-1"] === "library",
    "library",
    userName,
    () => addToFailList(1)
  );
}

export default question1;
