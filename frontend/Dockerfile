# ------------------------------------------------------------------------------
# Dockerfile for the frontend Node.js application
#
# Description:
# This Dockerfile defines how to build a Docker image for the frontend part of your project.
# The image includes a Node.js environment, installs all dependencies from package.json,
# and runs the application using node index.js.
# ------------------------------------------------------------------------------

# Use the official lightweight Node.js version 20 image based on Alpine Linux
FROM node:20-alpine

# Set the working directory inside the container
# All subsequent commands will run from the /app directory
WORKDIR /app

# Copy package.json and package-lock.json (if present) into the working directory
# This allows Docker to install dependencies before copying the full code,
# which enables better use of Docker's cache for faster builds
COPY package*.json ./

# Install the dependencies specified in package.json using npm
RUN npm install

# Copy the rest of the source code from the current host directory into the container
COPY . .

# Specify the command to run the application when the container starts
# This runs the index.js file using Node.js
CMD ["node", "index.js"]
