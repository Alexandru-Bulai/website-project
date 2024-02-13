# Pet Care

[![Super-Linter](https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE_NAME>/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Overview

This project involves creating a responsive website for Pet Care company that features a modern design with a navigation menu, company logo, title header, and a central GIF. The website is built using HTML, Tailwind css and JavaScript using Jest as testing enviroment.

## Setup and Usage

1. Clone the repository to your local machine with :
- `git clone https://github.com/Alexandru-Bulai/website-project.git`
- Open the terminal and go to the folder `cd website-project`
- Run `npm install` to get all the modules and dependencies ready
- Run `npm run dev` to start the development environment and run tests.
3. Visit `http://localhost:8081/home.html`.
4. You are all set up to edit the webpage! Enjoy 😄

## Testing enviroment
1) In the Test folder you can find the tests runned on JavaScript and you can add more tests there.
2) If you have any issue you can follow this guide (`https://www.youtube.com/watch?v=FgnxcUQ5vho&t=192s`).

## Framework used

- TailWind CSS

## Testing

- Jest

### E2E Testing

We are using Playwright to perform some End 2 End Testing.
Run `npm run e2e-local` to perform all checks locally and see an HTML report.
Run `npm run e2e` in your CI or if don't need a visual report produced.

For picking certain tests, visual debugging etc you can run `npx playwright test --ui`.

## Technologies used

- HTML
- CSS
- JavaScript
