
# Basic Web Client API server


## Demonstrates

1. Running Node/Express to create a backend server
1. Returning that data to the front to display


## Instructions

1. Copy `index.js` and `public/index.html` to your project directory
2. Open the terminal and navigate to the directory with `index.js`
3. Install these packages (run these in the Terminal)

```bash
# -s adds these to the package for your project
npm i -s express
npm i -s node-fetch@2
# -g installs this globally
npm i -g nodemon
```

4. Start the server

```bash
nodemon index.js
```

5. Go to url (that serves pages inside /public directory)

http://localhost:3000/



## Notes

- Uses [randomuser.me](https://randomuser.me/) API just to illustrate getting remote daa
- See [Express docs](https://expressjs.com/en/starter/hello-world.html) for more on [routing](https://expressjs.com/en/guide/routing.html), [params]()https://expressjs.com/en/5x/api.html#app.param), [static files](https://expressjs.com/en/starter/static-files.html)
- [node-fetch](https://www.npmjs.com/package/node-fetch) uses v2
