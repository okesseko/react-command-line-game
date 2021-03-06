import inquirer from "inquirer";
import answerHandler from "../utils/answerHandler.mjs";
import {
  REACT,
  HTML,
  JAVASCRIPT,
  X_VARIABLE,
} from "../constants/properNounColor.mjs";

async function question3(userName, addToFailList) {
  const answer = await inquirer.prompt({
    name: "question-3",
    type: "rawlist",
    message: `Q3: ${REACT} use ${X_VARIABLE} to allows us to write ${HTML} elements in ${JAVASCRIPT}.\n\n The ${X_VARIABLE} is ?\n`,
    choices: ["JSX", "Decorator", "Hook"],
  });

  return answerHandler(answer["question-3"] === "JSX", "JSX", userName, () =>
    addToFailList(3)
  );
}

export default question3;
