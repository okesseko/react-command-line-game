import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import answerHandler from "../utils/answerHandler.mjs";

async function question3() {
  const answer = await inquirer.prompt({
    name: "question-3",
    type: "rawlist",
    message: `${chalk.blue("React")} use ${chalk.red(
      "xxx"
    )} to allows us to write ${chalk.rgb(
      255,
      165,
      0
    )("HTML")} elements in ${chalk.yellow("JavaScript")}.\n\n The ${chalk.red.bold(
      "xxx"
    )} is ?\n`,
    choices: ["JSX", "Decorator", "Hook"],
  });

  return answerHandler(answer["question-3"] === "JSX");
}

export default question3;
