# Interview Scheduler

Introduction to React. A SPA interview scheduler with multiple testing environemnts used. We started with using Storybook with Jest testing for modular, isolated testing and development. We then explored the Cypress testing environment.

## Screenshots

!["Cypress"](https://github.com/Ryan-M-Burns/scheduler/blob/main/public/images/screenshots/cypress-test-environment.png)

!["Book Interview"](https://github.com/Ryan-M-Burns/scheduler/blob/main/public/images/screenshots/book-interview.png)

## Getting Started

1. Install dependencies with `npm install`.
2. Clone scheduler-api outside of your scheduler app folder
3. Follow README for scheduler-api to set up database
  - https://github.com/Ryan-M-Burns/scheduler-api
4. `npm start` from within scheduler-api folder to start up database 
5. `npm start` from within scheduler folder to start up scheduler app

## Running Jest Test Framework

```sh
npm test
```
## Running Storybook Visual Testbed

```sh
npm run storybook
```

Dependencies
- testing-library/react-hooks
- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts

Dev Dependencies
- babel/core
- storybook
  - addon-actions
  - addon-backgrounds
  - addon-links
  - addons
  - react
- testing-library/jest-dom
- testing-library/react
- prop-types
- react-test-renderer
- sass
