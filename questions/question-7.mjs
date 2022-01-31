import inquirer from "inquirer";
import answerHandler from "../utils/answerHandler.mjs";
import { REACT } from "../constants/properNounColor.mjs";

async function question7(userName, addToFailList) {
  const answer = await inquirer.prompt({
    name: "question-7",
    type: "rawlist",
    message: `Q7: The entire lifecycle of ${REACT} consists of a series of events.\n  Which event does not include?\n`,
    choices: [
      "ComponentDidUpdate",
      "ComponentDidUnmount",
      "GetSnapshotBeforeUpdate",
    ],
  });

  return answerHandler(
    answer["question-7"] === "ComponentDidUnmount",
    "ComponentDidUnmount",
    userName,
    () => addToFailList(7)
  );
}

export default question7;
