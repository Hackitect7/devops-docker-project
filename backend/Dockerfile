# ------------------------------------------------------------------------------
# Dockerfile for the backend Python Flask application
#
# Description:
# This file describes how to build a Docker image containing our Flask application.
# The resulting container runs a Python server with our code.
# ------------------------------------------------------------------------------

# Use the official Python 3.11 slim image — lightweight and smaller size
FROM python:3.11-slim

# Set the working directory inside the container — all commands and operations will run from /app
WORKDIR /app

# Copy the requirements.txt file from local folder to the container — it lists the libraries to install
COPY requirements.txt .

# Install all dependencies listed in requirements.txt using pip (Python package manager)
# The --no-cache-dir option disables caching to reduce the final image size
RUN pip install --no-cache-dir -r requirements.txt

# Copy ALL other files and folders from the local project to the current working directory in the container (/app)
# This includes our entire application code inside the container
COPY . .

# Command executed when the container starts
# Run Python and start app.py, where our Flask server is defined
CMD ["python", "app.py"]
