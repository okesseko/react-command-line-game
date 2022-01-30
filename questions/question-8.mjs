import inquirer from "inquirer";
import answerHandler from "../utils/answerHandler.mjs";

async function question8() {
  const answer = await inquirer.prompt({
    name: "question-8",
    type: "rawlist",
    message:
      "In some cases, we may want to render a child node into a DOM node that exists outside the parent component's DOM hierarchy, such as a tooltips or dialog.\n  In this case we can use ?\n",
    choices: [
      "ReactDOM.findDOMNode(child)",
      "ReactDOM.render(child, container)",
      "ReactDOM.createPortal(child, container)",
    ],
  });

  answerHandler(
    answer["question-8"] === "ReactDOM.createPortal(child, container)"
  );
}

export default question8;
