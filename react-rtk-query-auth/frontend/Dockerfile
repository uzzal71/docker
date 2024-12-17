# Build React App
FROM node:22.11.0-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . ./
RUN yarn build

# Output build folder
CMD ["echo", "React build complete"]
