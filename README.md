# Marker Checker 3000
![Marker Checker 3000](https://raw.githubusercontent.com/DaZzz/marker-checker-3000/master/demo.png)
Solution for the frontend assignment. 

## Description
In this project, you will be creating a drag and drop system that allows users to place markers on a coordinate grid.
Markers should snap to the closest X and Y cordinate.

## Requirements
Create a webpage that has a main content area with a left sidebar.
In the sidebar, create a list of 4 markers.
Each marker displays the X and Y coordinate they should be placed on.
In the main content area, use the D3 library to create a 10x10 grid.
Below the grid, create a "check" button that is disabled until all items are dragged onto the grid.
After the user clicks the "check" button, display correct or incorrect on the screen.

## Solution 
The additional packages used are [redux-actions](https://github.com/acdlite/redux-actions) which simplifies the process of creating new actions using 
[FLUX Standard Action](https://github.com/acdlite/flux-standard-action), [react-dnd](https://github.com/gaearon/react-dnd) to implement drag'n'drop functionality. Although D3 was used for the grid I would prefer to implement it with plain React to avoid side effects. :neckbeard:

## Includes
React, Redux, Webpack, KOA, Babel, ESLint

## Installation
```node
//  Install local dependencies
npm install
```

## Build Tasks
```node
// Start dev server
npm start

//  Start dev server with nodemon
npm run dev

// Run tests
npm run test

// Run linter
npm run lint
```
