# OS Algorithm Simulator

This project is a full-stack application built to simulate various OS algorithms, such as RoundRobin, Banker's Algorithm, SCAN-CSCAN, and MRU page replacement. The front-end of the application was built using React.js, while the back-end was built using Node.js and Express.js. The application also includes a chatbot that uses the OpenAI API to generate responses based on user input.

## Installation

To run this project locally, you must have Node.js and npm installed on your system. Once you have cloned this repository, navigate to the project directory and run the following commands:

npm install
npm start

 
This will start the development server on [http://localhost:3000](http://localhost:3000) for the front-end and [http://localhost:5000](http://localhost:5000) for the back-end.

To use the chatbot feature, you must also set up an OpenAI API key and define the `OPENAI_API_KEY` environment variable in a `.env` file.

## Usage

To simulate an OS algorithm, select the algorithm from the dropdown menu and enter the required parameters in the input fields. Then, click the "Simulate" button to run the simulation and view the results.

To use the chatbot, enter a question in the input field and click the "Send" button to send the question to the backend API. The chatbot's response will be displayed on the screen.

# TechStack Used
- ReactJs
- NodeJs
- ExpressJs
- MongoDB
## API Reference

#### Get all items

```http
  GET /api/v1/get/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. Object id |

#### Get item

```http
  POST /api/v1/schedule
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body`      | `json` | **Required**. json data of Input from Front-end |

## Contributing

To contribute to this project, follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b new-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request.

Please make sure to write descriptive commit messages and to test your changes before submitting the pull request.

## Authors
- [Parth Sood](https://github.com/psood708)
- [Priyank Vaidya](https://www.github.com/octokatherine)
- [Akanksha Sharma](https://github.com/akankshaaa8)
- [Manav Surti](https://github.com/infosecmanav)
- [Puja Mavadhiya](https://github.com/pujamavadhiya)


## Badges


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

