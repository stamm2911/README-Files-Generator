// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const QuestionArray = [
  {
    type: "input",
    message: "Enter a project title: ",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a project description:",
    name: "description",
  },
  {
    type: "input",
    message: "Enter Installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter usage information:",
    name: "usage",
  },

  {
    type: "input",
    message: "Enter credits information:",
    name: "credits",
  },

  {
    type: "list",
    message: "Enter project licenses:",
    name: "license",
    choices: [
      "MIT License",
      "ISC License",
      "Apache License 2.0",
      "GPLv3 License",
      "GPLv2 License",
    ],
  },
  {
    type: "input",
    message: "Enter contribution guidelines:",
    name: "contribute",
  },
  {
    type: "input",
    message: "Enter gitHub username:",
    name: "gitHubUserName",
  },
  {
    type: "input",
    message: "Enter gitHub profile link:",
    name: "gitHubProfileLink",
  },
  {
    type: "input",
    message: "Enter your email:",
    name: "email",
  },
];
// TODO: Create a function to write README file
function writeToFile(data) {
  const filename = `README.md`;
  // const { username, location, url, github } = data;
  const ReadMeFile = `
      
${generateMarkdown.generateMarkdown(data.title)}
\n 
${generateMarkdown.renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#Contribute)
- [Questions](#Questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
${generateMarkdown.renderLicenseLink(data.license)}
## Contribute
${data.contribute}
## Questions
Contact me:\n
- GitHub: [${data.gitHubUserName}](${data.gitHubProfileLink})\n
- Email: ${data.email}
    `;

  fs.writeFile(filename, ReadMeFile, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(QuestionArray).then((data) => {
    writeToFile(data);
  });
}

// Function call to initialize app
init();
