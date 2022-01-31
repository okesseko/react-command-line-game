import inquirer from "inquirer";
import answerHandler from "../utils/answerHandler.mjs";

async function question8(userName, addToFailList) {
  const answer = await inquirer.prompt({
    name: "question-8",
    type: "rawlist",
    message:
      "Q8: In some cases, we may want to render a child node into a DOM node that exists outside the parent component's DOM hierarchy, such as a tooltips or dialog.\n  In this case we can use ?\n",
    choices: [
      "ReactDOM.findDOMNode(child)",
      "ReactDOM.render(child, container)",
      "ReactDOM.createPortal(child, container)",
    ],
  });

  return answerHandler(
    answer["question-8"] === "ReactDOM.createPortal(child, container)",
    "ReactDOM.createPortal(child, container)",
    userName,
    () => addToFailList(8)
  );
}

export default question8;
