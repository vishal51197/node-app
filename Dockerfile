## Get the latest version of node
FROM node:latest

## Mark /app as a working directory
WORKDIR /app

COPY . /app/

RUN npm install

CMD [ "node","app.js"]