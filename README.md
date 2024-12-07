# Unhandled Exception in Node.js Server

This repository demonstrates a common error in Node.js server applications: unhandled exceptions.  The `bug.js` file shows a server that does not handle exceptions, which can cause unexpected crashes. The `bugSolution.js` demonstrates how to use the `process.on('uncaughtException')` event to handle these exceptions gracefully. 

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js`.
4. Observe the server start. Note that there is no error handling in the server code, and any unhandled exception will cause the process to crash.  Try manually throwing an error to test this behavior.
5. Run `node bugSolution.js` to see how to properly handle exceptions.

## Solution

The `process.on('uncaughtException')` event listener is crucial for handling unexpected errors.  This prevents the entire application from crashing. In production, a more robust error-handling mechanism should be used (e.g., logging to a centralized logging system, alerting, or using a process manager like PM2).