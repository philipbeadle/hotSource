#chmod -R 777 .
#docker build -t hot-source .
#docker run -it --rm -p 8080:8080 -v $(pwd):/www -w "/www" hot-source npm start

FROM node:latest

RUN npm install live-server -g

CMD npm start
