# Pet Care

[![Super-Linter](https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE_NAME>/badge.svg)](https://github.com/marketplace/actions/super-linter)

![Fluffy my Immagination](https://github.com/Alexandru-Bulai/website-project/fluffy-my-pillow.gif)


## Project Overview

This project aims to develop a comprehensive and responsive website for a Pet Care company, showcasing its services and commitment to pet well-being through a visually appealing and user-friendly interface. The website is meticulously crafted using the latest web technologies to ensure high performance and accessibility across various devices.

## Key Features

1. **Central GIF Animation**: A captivating central GIF animation that engages visitors, showcasing the lively and caring nature of the Pet Care company's services.
2. **Interactive Elements**: Utilizes JavaScript to add interactivity to the website, including dynamic content loading and interactive UI components.
3. **Tailwind CSS**: Employs Tailwind CSS for styling, taking advantage of its utility-first approach to build custom designs quickly without leaving the HTML.
4. **Accessibility and SEO**: Implements best practices for accessibility(`Accessibility score: 77`) and SEO (`SEO score: 92`), ensuring the website is accessible to as wide an audience as possible and ranks well on search engines.

![Accessibility and SEO scores](https://github.com/Alexandru-Bulai/website-project/seo-accessibility.png "Accessibility and SEO scores")

## Technologies Used

- **HTML**: For structuring the website's content.
- **Tailwind CSS**: For styling and implementing responsive design.
- **JavaScript**: To add interactivity and dynamic content.
- **Jest**: Used as the testing environment to ensure code reliability and functionality through comprehensive unit and integration tests.
- **Playwright**: For End-to-End (E2E) testing, verifying the website's functionality across different browsers and environments.

## Setup and Usage

Follow these steps to get the project up and running on your local machine:

1. **Clone the Repository**: Use the command `git clone https://github.com/Alexandru-Bulai/website-project.git` to clone the project repository.
2. **Navigate to the Project Directory**: Enter the project directory by running `cd website-project` in your terminal.
3. **Install Dependencies**: Run `npm install` to install all required modules and dependencies for the project.
4. **Start Development Environment**: Execute `npm run dev` to launch the development environment and auto-run tests.
5. **Access the Website**: Open your web browser and visit `http://localhost:8081/home.html` to view the website.

Enjoy exploring and editing the website as needed!

## Testing Environment

The project incorporates a robust testing setup:

- **Unit and Integration Testing**: Located in the Test folder, allowing for the addition of more JavaScript tests to ensure functionality.
- **Troubleshooting Guide**: For any issues, refer to our guide on YouTube (`https://www.youtube.com/watch?v=FgnxcUQ5vho&t=192s`).

## E2E Testing with Playwright

For comprehensive E2E testing, we utilize Playwright:

- **Local Testing**: Run `npm run e2e-local` for local testing with an HTML report.
- **CI Testing**: Use `npm run e2e` for testing in Continuous Integration environments or when a visual report is not needed.
- **Playwright UI**: For specific test selection or visual debugging, execute `npx playwright test --ui`.


- Jest

### E2E Testing

We are using Playwright to perform some End 2 End Testing.
Run `npm run e2e-local` to perform all checks locally and see an HTML report.
Run `npm run e2e` in your CI or if don't need a visual report produced.

For picking certain tests, visual debugging etc you can run `npx playwright test --ui`.
