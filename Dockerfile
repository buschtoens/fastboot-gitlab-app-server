FROM node:slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV PORT 80
EXPOSE $PORT

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "npm", "start" ]
