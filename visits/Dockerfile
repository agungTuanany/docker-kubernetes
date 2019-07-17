# Specify a base image
FROM node:alpine

WORKDIR '/app'

# install some dependencies
COPY package.json .
RUN npm install
COPY . .

# Default command
CMD ["npm", "start"]
