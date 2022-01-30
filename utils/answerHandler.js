import { createSpinner } from "nanospinner";
import delay from "./delay";

async function answerHandler(isCorrect) {
  const spinner = createSpinner("Checking answer...").start();
  await delay();

  if (isCorrect) {
    spinner.success({ text: "Nice Job" });
  } else {
    spinner.error({ text: "Sorry, that's not the right one" });
  }
}

export default answerHandler;
