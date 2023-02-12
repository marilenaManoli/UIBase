# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Running Tests

## Unit Tests

To run all unit tests you can use:

### `npm run test`

## Functional Tests

In one terminal open the application on localhost by running:

### `npm start`

Now you can either run the tests in another terminal using:

### `npx cypress run`

Or you can run it on a chromium browser using:

### `npx cypress open`

# Deploying to S3

You need to set up AWS CLI ion your machuine. You'll need to connect to Alex's account. You can follow AWS's tutorial here: https://docs.aws.amazon.com/polly/latest/dg/getting-started-cli.html. You'll also need to set it up by folliowing this tutorial: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html

To deploy to the S3 you need to run the following command:

### `npm run client-deploy`

This command is a series of three commands. For an explanation of what they do see below

1. It needs to rebuild the app using

### `npm run build`

2. Then it needs to sync what you have locally with the S3 bucket using:

### `client-s3-deploy`

After that, it needs to create an invalidation for the cloudront which will clear it's cache for the app build and allow the changes made to the S3 to be visible. For this run:

### `create-cloudfront-invalidation`
