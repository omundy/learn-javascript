FROM node:15.8.0-alpine3.10
WORKDIR /app

# Install dependencies
ADD index.js package.json ./
RUN npm install express
RUN npm install

# Run the app.  CMD is required to run on Heroku
CMD node index.js
