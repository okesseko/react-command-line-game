#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import delay from "./utils/delay.mjs";

import question1 from "./questions/question-1.mjs";
import question2 from "./questions/question-2.mjs";
import question3 from "./questions/question-3.mjs";
import question4 from "./questions/question-4.mjs";
import question5 from "./questions/question-5.mjs";
import question6 from "./questions/question-6.mjs";
import question7 from "./questions/question-7.mjs";
import question8 from "./questions/question-8.mjs";
import question9 from "./questions/question-9.mjs";
import question10 from "./questions/question-10.mjs";

let USER_NAME = "";
let FAIL_QUESTIONS_LIST = [];
const addToFailList = (numberOfQuestion) =>
  FAIL_QUESTIONS_LIST.push(numberOfQuestion);

async function welcome() {
  figlet.text(
    "React command line game\n\n",
    {
      font: "Slant",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 100,
      whitespaceBreak: true,
    },
    (err, data) => {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        process.exit(1);
      }
      console.log(gradient.pastel.multiline(data));
    }
  );
  await delay(500);
  console.log(
    boxen(
      `This is a React quiz game.\nThere are ten questions in total.\nEach question consists of one question and three options.\nYou need to choose the correct answer from three options.\n\nGood luck and have fun 😆😆`,
      {
        padding: 1,
        margin: 1,
        borderStyle: "double",
      }
    )
  );

  const nameObj = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Your name is?",
    default() {
      return "Player";
    },
  });
  USER_NAME = nameObj.name;
  console.log(`Hello, ${chalk.bgBlue.black(USER_NAME)}\n`);
  await delay();
  console.log(`Are you ready?\nlet's get started😉\n`);
  await delay();
}

async function final() {
  if (!FAIL_QUESTIONS_LIST.length) {
    chalkAnimation.rainbow(
      "Congrats, you passed all the questions, you are the best"
    );
  } else {
    console.log(
      chalk.red(`Oops, you failed question(s) ${FAIL_QUESTIONS_LIST.join(",")}`)
    );
  }

  FAIL_QUESTIONS_LIST = [];
  await delay();
  console.log(
    boxen(
      gradient.cristal(
        "If you like this game.\nPlease give me a star on github.\nIf you have any suggestions or questions please let me know.\nThank you very much.😊😊\n\nGithub: https://github.com/okesseko/react-command-line-game"
      ),
      {
        padding: 1,
        margin: 1,
        borderStyle: "double",
      }
    )
  );

  const playAgain = await inquirer.prompt({
    name: "playAgain",
    type: "list",
    message: `${chalk.bgWhite.black("Do you want to play again?")}\n`,
    choices: ["Ya, of course.", "Well, maybe next time."],
  });

  if (playAgain.playAgain === "Ya, of course.") {
    console.log("\nOk, here we go.\n");
    await delay();
    main(true);
  } else {
    console.log("\nOk, see you next time.\n");
  }
}

async function main(skipWelcome) {
  if (!skipWelcome) {
    console.clear();
    await welcome();
  }
  await question1(USER_NAME, addToFailList);
  await question2(USER_NAME, addToFailList);
  await question3(USER_NAME, addToFailList);
  await question4(USER_NAME, addToFailList);
  await question5(USER_NAME, addToFailList);
  await question6(USER_NAME, addToFailList);
  await question7(USER_NAME, addToFailList);
  await question8(USER_NAME, addToFailList);
  await question9(USER_NAME, addToFailList);
  await question10(USER_NAME, addToFailList);
  await final();
}

main();
