import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import answerHandler from "../utils/answerHandler.mjs";

async function question1() {
  const answer = await inquirer.prompt({
    name: "question-1",
    type: "rawlist",
    message: `What is ${chalk.blue("React")} ?\n`,
    choices: ["framework", "language", "library"],
  });

  return answerHandler(answer["question-1"] === "library");
}

export default question1;
