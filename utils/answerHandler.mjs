import chalk from "chalk";
import { createSpinner } from "nanospinner";
import delay from "./delay.mjs";

const successMsg = [
  "😎😎 You are right. Nice Job $user.",
  "Well done my friend. 🤗🤗",
  "I proud of you $user. 👏👏",
  "Bravo! 🤩🤩",
  "Incredible! 🙌🙌",
];

async function answerHandler(isCorrect, rightAns, userName, addToFailList) {
  const spinner = createSpinner("Checking answer...\n\n").start();
  await delay(500);

  if (isCorrect) {
    spinner.success({
      text: `${chalk.green(
        successMsg[Math.floor(Math.random() * 5)].replace(
          "$user",
          chalk.blueBright(userName)
        )
      )}\n`,
    });
  } else {
    addToFailList();
    spinner.error({
      text: `${chalk.redBright(
        "😥😥 Sorry, that's not the right one."
      )}\nThe right answer is ${chalk.green(rightAns)}\n`,
    });
  }
  await delay();
}

export default answerHandler;
