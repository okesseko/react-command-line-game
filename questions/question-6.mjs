import inquirer from "inquirer";
import answerHandler from "../utils/answerHandler.mjs";
import { REACT, X_VARIABLE } from "../constants/properNounColor.mjs";

async function question6() {
  const answer = await inquirer.prompt({
    name: "question-6",
    type: "rawlist",
    message: `Hook is a major update to ${REACT} after ${REACT} version ${X_VARIABLE}, allowing to use state and other ${REACT} features without writing class.\n  Version ${X_VARIABLE} is?\n`,
    choices: ["17.0", "16.8", "16.5"],
  });

  return answerHandler(answer["question-6"] === "16.8");
}

export default question6;
