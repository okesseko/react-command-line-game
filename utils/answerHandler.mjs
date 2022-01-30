import chalk from "chalk";
import { createSpinner } from "nanospinner";
import delay from "./delay.mjs";

async function answerHandler(isCorrect) {
  const spinner = createSpinner("Checking answer...\n\n").start();
  await delay(500);

  if (isCorrect) {
    spinner.success({ text: `😎😎 ${chalk.green("You are right. Nice Job")}\n` });
  } else {
    spinner.error({
      text: `😥😥 ${chalk.redBright("Sorry, that's not the right one")}\n`,
    });
  }
}

export default answerHandler;
