# LamaBlog Frontend

This is the backend for the Lama Dev Fullstack JavaScript Blog. It is built with Node.js and Express, and uses MongoDB as the database.

## Frontend
The frontend code for this project can be found at [https://github.com/FREDVUNI/lamaBlog-frontend.git](https://github.com/FREDVUNI/lamaBlog-backend.git).

## Technologies Used
- Node.js
- Express
- MongoDB

## Installation
To use this application, you will need to have Node.js and MongoDB installed on your machine. Once you have these dependencies installed, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` in the project directory to install the necessary dependencies.
3. Create a `.env` file in the project directory and set the following environment variables:
```
PORT=<PORT_NUMBER>
DB_URL=<MONGODB_URL>
```
4. Start the development server by running `npm run dev` in the project directory.

## API Endpoints
This backend provides the following API endpoints:

- `/api/posts`
  - `GET`: get all posts
  - `POST`: create a new post
- `/api/posts/:id`
  - `GET`: get a specific post by ID
  - `PUT`: update a specific post by ID
  - `DELETE`: delete a specific post by ID

## Contribution
If you want to contribute to this project, you can do so by following these steps:

1. Fork this repository
2. Clone the forked repository to your local machine
3. Create a new branch for your changes: `git checkout -b my-new-branch`
4. Make changes and commit them: `git commit -m "Add some feature"`
5. Push to the branch: `git push origin my-new-branch`
6. Create a new Pull Request

## Credits
This project was created by [Lama Dev](https://www.youtube.com/channel/UCO1E5vWo7W7B3JNqZT7CZ5g).

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
