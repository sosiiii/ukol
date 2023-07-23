FROM node:latest as node

WORKDIR /app

COPY package.json ./

RUN npm install

# Copy all files to the work dir
COPY . .

EXPOSE 4200 49153

CMD ["npm", "start"]
