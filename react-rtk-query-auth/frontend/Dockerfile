# Build React app
FROM node:22.11.0-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN yarn install

# Copy source code and build
COPY . ./
RUN yarn build

# Use Nginx for serving React app
FROM nginx:stable-alpine

# Copy built React app to Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy Nginx config
COPY ../nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
