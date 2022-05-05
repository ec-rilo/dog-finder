
<div align="center" width="100%">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
</div>

<h1 align="center">DogFinder</h1>

<div align="center" width="100%">
    <img src="https://i.imgur.com/6lHHZhr.png">
</div>

<h4 align="center">Searching through dog breeds and saving the ones you want to adopt has never been easier. </h4>

## Features
**Dog Search**
</br>
Filter through 100s of dog breeds and get an overview of each one being able to see what category they belong to, a look at the temperament, and descriptions.

**Data Bank**
</br>
See a breed you like? It's as simple as giving the breed you like a heart and from there it will save the dog to your account. Go to the "My Breeds" page to view the dogs you chose.

## Motivation and Story
I couldn't find any websites where I could save dog breeds that I had in mind to reference or research more into later so I decided to create
a app where many users have the ability to do just that. With data storage in the back-end and retrieval in the front-end I'm able to get back the users
data from my database at an average of 10 - 15ms per request. Unfortunately I'm limited by the API's speeds. One API is quick getting responses at an avergae of
100ms while the other jumps from 500 - 1000ms. I did the best in working with this by carefully picking when to do queries and storing data to retrieve
in the back-end for a quicker response time for saved breeds.

## Code Styles
This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Tech Stack
**Built with**
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Postgresql](https://www.postgresql.org/)

## Repository Installation (ssh)
`$ git clone git@github.com:ec-rilo/dog-finder.git`

Once in the repository make sure to install the required packages.

`$ npm install`

Some global credentials are also needed, so make sure to create a .env file. I provided a `example.env` that you can fill out and rename.

Once you have a `.env` created go ahead and create a `dog_finder` database in PostgreSQL and seed the `postgres.sql` schemas into it.

Make sure to also create a user. This project will only work with one user.

Once all this is done all that's left to do is run `npm run start` and `npm run react-dev`


<p align="center">Project created by <a href="https://github.com/ec-rilo">Edgar Carrillo</a></p>
