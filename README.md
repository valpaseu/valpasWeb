# React Timer Project

This project is a simple timer application built with React, Material-UI library, and AWS services such as AWS DataStore, AWS Cognito, and Storage. It is written in JavaScript and uses Yarn for installation and starting the project.

## Features

- Countdown timer that can be set to a specific time.
- Stopwatch that can be started, stopped, and reset.
- Audio notification when the timer or stopwatch reaches zero.
- Material-UI styling for a modern and clean user interface.
- AWS services for authentication, data storage, and deployment.

## Setup

To run the project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/valpaseu/valpasWeb.git`
2. Install the dependencies using Yarn: `yarn install`
3. Start the development server using Yarn: `yarn start`
4. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Deployment

To deploy the application to AWS, follow these steps:

1. Install the AWS Amplify CLI by running `npm install -g @aws-amplify/cli`.
2. Initialize the Amplify project by running `amplify init`.
3. Add the necessary AWS services to the project by running `amplify add auth`, `amplify add api`, `amplify add storage`, etc.
4. Push the changes to the cloud by running `amplify push`.

## Usage

To use the application, follow these instructions:

1. Set the timer or stopwatch by clicking the appropriate button.
2. Start the timer or stopwatch.
3. Wait for the timer or stopwatch to reach zero.
4. Listen for the audio notification.
5. Reset the timer or stopwatch if necessary.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
