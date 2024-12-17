# Use the official Node.js image
FROM node:22.11.0-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Expose backend port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]