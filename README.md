# WebdriverIO + TypeScript + Cucumber + Allure Report Project

## Overview

This project is a technical home assignment that demonstrates the use of WebdriverIO + TypeScript with the Cucumber framework for end-to-end testing. The Allure Report is used for generating detailed test reports.
I sincerely hope that you will appreciate the architectural solution. I'm highly interested in the position and would like to move forward to the next stage of the recruiting process with your company.

## Prerequisites

Before you can run the project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/oskonstantinov/esw_wdio_typescript.git
    cd esw_wdio_typescript
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```
    or if you are using yarn:
    ```sh
    yarn install
    ```

## Running the Tests

To execute the tests, run the following command:
```sh
npm run wdio
 ```

Allure report will be generated automatically. But if you would like to trigger it manually, run the following command:

```sh
npm run allure-report
 ```

## Project Structure
The project is structured as follows:
```sh
├── features
│   ├── pageobjects
│   │   └── pageelements
│   │       └── *.ts
│   │   └── *Page.ts
│   ├── step-definitions
│   │   └── Steps.ts
│   └── *.feature
├── reports
│   └── allure-results
│   └── allure-report
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── wdio.conf.ts
```

features/: Contains the feature file and step definitions.
features/pageobjects/: Contains the implementation of the Page Object Model.
features/pageobjects/pageelements: Contains the implementation of the Page Object Model for elements, which describe the reusable components like Navigation Bar.
features/step-definitions/: Contains the implementation of the step definitions.
reports/: Directory for storing test reports.
package.json: and package-lock.json: Project dependencies and scripts.
wdio.conf.js: Configuration file for WebdriverIO.