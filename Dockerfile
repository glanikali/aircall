FROM node:18-alpine3.15
WORKDIR /app


COPY ./package.json /package.json
COPY ./yarn.lock /yarn.lock

RUN rm -rf node_modules 
RUN yarn install

COPY ./ ./

EXPOSE 3000


CMD ["yarn", "start"]
