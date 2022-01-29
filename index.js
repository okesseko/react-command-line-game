#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

const delay = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

async function welcome() {
  const welcomeSlogan = chalkAnimation.rainbow(
    "Hi, welcome to react command line game\n "
  );
  await delay(1000);
    console.log(`${chalk.blue("testest")}
  'welelee'`);
}
welcome();