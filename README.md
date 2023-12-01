# Buttons Counter App

### With this app you can create buttons, count your button´s clicks and delete them.

Open a terminal on main folders (client and server) and run the following command to install all dependencies

    npm install

 If you dont want to create a .env file for the PORT, just change the line 2 in index.js (server) with the line code below.

    const PORT = YOUR_PORT

In client go to App.jsx and change the port with yours on the line 5

    axios.defaults.baseURL = "http://localhost:YOUR_PORT/buttons/"

- Front End:

    - ReactJS ( Vite )
    - Axios

- Back End:

    - Node.js
    - Express.js
    - Cors
    - Dotenv
    - Body-parser

Thanks for reading and have fun coding!

Visit my website for more projects: https://valemiche.com.ar