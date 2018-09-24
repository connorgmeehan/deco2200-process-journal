FROM node:8

RUN mkdir -p /opt/deco2200
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

WORKDIR /opt/deco2200
COPY . /opt/deco2200
RUN npm cache clean --force \
  && npm install

RUN [ "npm", "run", "build" ]
CMD [ "npm", "run", "start" ]