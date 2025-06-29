# This file creates a simple backend server using Flask —
# a popular Python framework for web applications and APIs.

# Import the Flask class from the flask library to create a web application
from flask import Flask

# Create an instance of the Flask application
app = Flask(__name__)

# Define a route (endpoint) /api that handles HTTP requests to this path
@app.route('/api')
def hello():
    # Return a JSON response with the message "Hello from Flask"
    return {"message": "Hello from Flask"}

# This code runs the server only if this file is executed directly,
# not imported as a module into other code
if __name__ == '__main__':
    # Start the Flask server
    # host='0.0.0.0' means the server listens on all IP addresses,
    # allowing access from other containers or machines
    # port=5000 sets the port number where the server will be available
    app.run(host='0.0.0.0', port=5000)
