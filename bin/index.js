#!/usr/bin/env node

import { input } from "@inquirer/prompts";
import select from "@inquirer/select";

const app = async () => {
  // demo prompts
  const packageName = await input({ message: "Enter Package Name" });

  const packageManager = await select({
    message: "Select a package manager",
    choices: [
      {
        name: "npm",
        value: "npm",
        description: "npm is the most popular package manager",
      },
      {
        name: "yarn",
        value: "yarn",
        description: "yarn is faster than npm",
      },
      {
        name: "pnpm",
        value: "pnpm",
        description: "pmpm is way better than yarn",
      },
    ],
  });

  console.log(
    `\n${packageName} will be installed using ${packageManager}...\n`
  );
};

app();
