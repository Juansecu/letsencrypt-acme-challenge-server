FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY src ./src

RUN chown -R node /app
USER node

RUN npm install --production

CMD ["npm", "start"]
