import inquirer from "inquirer";
import answerHandler from "../utils/answerHandler.mjs";
import { REACT, X_VARIABLE } from "../constants/properNounColor.mjs";

async function question9(userName, addToFailList) {
  const answer = await inquirer.prompt({
    name: "question-9",
    type: "rawlist",
    message: `Q9: After version 16., ${REACT} uses the new coordination engine ${X_VARIABLE}, which increases its suitability for areas such as animation, layout, and gestures.\n  The ${X_VARIABLE} is?\n`,
    choices: ["Fiber", "MVVM", "Change Detection"],
  });

  return answerHandler(
    answer["question-9"] === "Fiber",
    "Fiber",
    userName,
    () => addToFailList(9)
  );
}

export default question9;
