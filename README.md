# next-level-week-2-proffy

## Project

***EN:*** This project was created thinking about improving the connection between students and teachers, basically it is an online teaching platform built with NodeJS, ReactJS and React Native using Typescript during the NLW (Next Level Week) event provided by RocketSeat and taught by CTO Diego Fernandes.

***PT-BR:*** Este projeto foi criado pensando na melhoria da conexão entre alunos e professores, basicamente é uma plataforma de ensino online construída com NodeJS, ReactJS e React Native usando Typescript durante o evento NLW (Next Level Week) fornecido pela RocketSeat e ministrado pelo CTO Diego Fernandes.

This project was developed with the following technologies:

- ReactJS
- React Native
- Expo
- NodeJS
- Express
- SQLite
- Knex
- Typescript
***

## Preview Web
![preview-web](preview.png)
***

## Preview Mobile
![preview](preview-mobile.gif)
***

### How To Install

To clone and run this application, you'll need Git, Node.js, Yarn & Expo installed on your computer.

From your command line:

#### Install Proffy API 

```bash
# Clone this repository
$ git clone https://github.com/gideonfernandes/next-level-week-2-proffy.git

# Go into the repository
$ cdnext-level-week-2-proffy/server

# Install dependencies
$ yarn install

# Run migrations (Before performing migrations, delete the database.sqlite file to initialize an empty database)
$ yarn knex:migrate

# Start server
$ yarn start

# running on port 8888
```

#### Install Proffy Web

```bash
# Go into the repository
$ cd next-level-week-2-proffy/web

# Install dependencies
$ yarn install

# Run
$ yarn start

# running on port 3000
```

#### Install Proffy Mobile

```bash
# Go into the repository
$ cd next-level-week-2-proffy/mobile

# Install dependencies
$ yarn install

# Run
$ yarn start

# Expo will open, just scan the qrcode on terminal or expo page
```
### License

This project is under the MIT license.
