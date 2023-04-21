# Base image
FROM node:latest

# Set working directory
WORKDIR /frontend

# Copy frontend files
COPY . /frontend/

# Install dependencies
RUN npm install --production

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]