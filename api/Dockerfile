FROM node:14 as dev

# Create app directory
WORKDIR /queueapi

# Install app dependencies
COPY package*.json ./

RUN yarn

# Bundle app source
COPY . .

EXPOSE 8080

CMD ["yarn", "dev"]