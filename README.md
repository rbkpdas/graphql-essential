# graphql-essential

# Building a GraphQL app with node, babel, graphql and more

## Setting up the project

- NodeJs, Git, VS Code Editor 
- In your terminal, create directory `graphql-essential` and **change into it**.
- Run
  ```bash
  git clone https://github.com/rbkpdas/graphql-essential.git
  git reset --hard
  git branch
  ```

## Install dependency

nmp install

## Start Application

npm start

http://localhost:8080

## Setting up the project from scratch

Create a folder

Use Git Terminal

npm init

Enter appropriate content for the same

Type : yes

npm install --save-dev babel-cli babel-core babel-preset-env babel-preset-stage-0

npm install express express-graphql graphql nodemon

npm i -g babel-cli [if babel-node is not recognized as an internal or external command, operable program or batch file]

update in package.json


"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./index.js --exec babel-node -e js"
	
npm start

Browser : http://localhost:8080/graphql


