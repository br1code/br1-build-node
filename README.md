# Folder structure 🏢

  I use this in every node.js REST API service that I build, let's see in details what every component do.

  ```md
  src
  │    app.js                # App entry point
  └─── api                   # Express router controller for all the endpoints of the app
  │    └─── controllers      # Controllers for the endpoints of the app
  └─── config                # Environment variables and configuration related stuff
  └─── jobs                  # Jobs definitions for agenda.js
  └─── loaders               # Split the startup process into modules
  └─── models                # Database models
  └─── services              # All the business logic is here
  │    └─── middleware       # Express middlewares for the endpoints of the app
  └─── subscribers           # Event handlers for async task
  └─── tests                 # Tests with Jest or Mocha
  └─── utils                 # Utility methods
  ```