FROM node:16-alpine
COPY ./server /server
WORKDIR /server
RUN npm install
EXPOSE 3000
CMD npm start

