# RPG-Ultimate
Creating a new character in many tabletop RPG settings can be a hassle, especially if you don't know the rules inside and out. RPG Ultimate seeks to eliminate as much of the pain of generating character stats as possible, so that you can focus on making your character unique and fun to play. RPG Ultimate is still in development, though, but the Dungeons and Dragons character manager should be up and running soon. Look forward to future system implementations, and if you have any suggestions or ideas on how to make this application better feel free to contact me at bryan.texasbobcat@gmail.com!

## Getting Started
To fire this application up all you need to do is follow these simple steps:

1. Fork and clone this repo onto your local machine, then cd into it in your terminal.
2. Run ```npm install``` to install application dependencies.
3. Once finished, cd into "database" and install there as well. 
4. Run ```createdb rpg-data``` to create a database on your computer.
5. Run ```knex migrate:latest``` to give that database tables.
6. Run ```nodemon server.js``` to start up your local server.
7. Open a new terminal and cd into "client". 
8. Run ```yarn start``` to initiate the React compiler. 
9. From here, if a webpage doesn't automatically open, open your browser and navigate to ```localhost:3000```.
10. Start building and managing your characters!

## Technologies
RPG Ultimate is a full stack application built with these technologies:

### Backend 

- ExpressJS
- PostgreSQL
- KnexJS

### Frontend

- ReactJS
- React-DOM
- React-Scripts

## Author

- Bryan Anderson - _Initial Work_ - 2019

## Acknowledgments

Thanks to D&D Beyond for inspiring this application. Obviously D&D Beyond is a wonderful service, but RPG Ultimate aims to take that to a slew of other RPG systems!