#chmod -R 777 .
#docker build -t hot-source-api .
#docker run -it --rm -p 8080:3000 -v $(pwd):/www:rw -w "/www" hot-source-api

FROM node:latest

RUN npm install nodemon -g
RUN npm install

CMD nodemon server.js
