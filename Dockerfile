FROM node:14.6-alpine
WORKDIR /nodedockerapp
COPY . .
RUN npm i
CMD ["node", "index.js"]
EXPOSE 80