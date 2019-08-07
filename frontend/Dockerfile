# Production Environment

# Specify a base image
FROM node:alpine as builder

WORKDIR '/app'

# install some dependencies
COPY package*.json ./
RUN npm install

COPY . .

# Default command | build phase
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html

