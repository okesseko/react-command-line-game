import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import answerHandler from "../utils/answerHandler.mjs";

async function question4() {
  const x = `${chalk.red("xxx")}`;
  const answer = await inquirer.prompt({
    name: "question-4",
    type: "rawlist",
    message: `We should add ${x} to identify each element.\n  When rendering multiple components.\n  The ${x} is?\n\n  Example:\n${boxen(
      `const numbers = [1, 2, 3, 4, 5];\nconst listItems = numbers.map((number) =>\n    <li ${x}={number.toString()}>{number}</li>\n);`,
      { padding: 1 }
    )}
      \n`,
    choices: ["id", "uuid", "key"],
  });

  return answerHandler(answer["question-4"] === "key");
}

export default question4;
