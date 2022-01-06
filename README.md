# graphql-essential

Basic setup for webserver using node, babel, graphql
---------------------------------------------------
1)Create a folder/ Clone,  npm install and npm start
2)Setup project
>npm init
> Enter appropriate content for the same
> Type : yes
>npm install --save-dev babel-cli babel-core babel-preset-env babel-preset-stage-0
>npm install express express-graphql graphql nodemon
>npm i -g babel-cli [if babel-node is not recognized as an internal or external command, operable program or batch file]
update in package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./index.js --exec babel-node -e js"
>npm start
Browser you can run:
http://localhost:8080/graphql


