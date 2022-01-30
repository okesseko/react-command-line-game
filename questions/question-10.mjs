import inquirer from "inquirer";
import gradient from "gradient-string";
import answerHandler from "../utils/answerHandler.mjs";

async function question10() {
  const coolGradient = gradient([
    { color: "rgb(94, 211, 243)", pos: 0 },
    { color: "rgb(234, 213, 23)", pos: 1 },
  ]);
  
  const answer = await inquirer.prompt({
    name: "question-10",
    type: "rawlist",
    message: coolGradient("Which front-end library is your favorite?\n"),
    choices: ["React", "React", "React"],
  });

  return answerHandler(answer["question-10"] === "React");
}

export default question10;
