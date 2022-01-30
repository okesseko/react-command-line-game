import inquirer from "inquirer";
import answerHandler from "../utils/answerHandler.mjs";
import { REACT } from "../constants/properNounColor.mjs";

async function question2() {
  const answer = await inquirer.prompt({
    name: "question-2",
    type: "rawlist",
    message: `${REACT} is developed by ?\n`,
    choices: ["Meta(Facebook)", "Google", "Individual developer"],
  });

  return answerHandler(answer["question-2"] === "Meta(Facebook)");
}

export default question2;
