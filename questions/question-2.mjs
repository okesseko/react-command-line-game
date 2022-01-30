import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import answerHandler from "../utils/answerHandler.mjs";

async function question2() {
  const answer = await inquirer.prompt({
    name: "question-2",
    type: "rawlist",
    message: `${chalk.blue("React")} is developed by ?\n`,
    choices: ["Meta(Facebook)", "Google", "Individual developer"],
  });

  return answerHandler(answer["question-2"] === "Meta(Facebook)");
}

export default question2;
