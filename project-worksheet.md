# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|January 15| Project Description | Complete
|January 15| Wireframes / Priority Matrix / Functional Components | Complete
|January 15| Core Application Structure (HTML, CSS, etc.) | Complete
|January 15| Pseudocode / actual code | In Progress
|January 16| Initial Clickable Model  | Complete
|January 17| MVP | Incomplete
|January 18| Present | Incomplete


## Project Description

Bringing in datakick.org/api, this application/website will allow users to input a barcode and display all available information. Images will be displayed if available. Vision for this to eventually allow users to compare prices online. Store owners can also enter in an item to search for barcodes for uniformity and compliance.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.


Initialization - https://drive.google.com/open?id=1o7zai60ewWNZwamnBFR3Nk8d4foCnu_G
First Interaction - https://drive.google.com/open?id=1FD3gcGa8lwSQnL78Y13BRN5gtOmix4kN
Second Interaction - https://drive.google.com/open?id=1-xj1lIJRKlfmnHiRJY67XOStwtQObn6f

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

Matrix - https://drive.google.com/open?id=1tGW8Yn2GTbeflBPdiqmE8oMLHAqymsWD

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- User input barcode
- Take search query by user input and use external api 
- Render data on page in a list
- Create item search information

#### PostMVP 

- Add images to data
- Incorporate a barcode scanner

## React Architectural Design

Define the the React components and the architectural design of your app.

#### [SAMPLE FROM A MAP BASED PROJECT](https://res.cloudinary.com/dvjtpejbw/image/upload/v1540221204/20181022_111216.jpg)

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 


| Component | Description | 
| --- | :---: |  
| Title | Title |
| Navigation | Has all my routes |
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Adding Form | H | 3hrs| 2hrs |
| Passing Functions | H | 2hrs | 1.5hrs |
| Links and Routers | H | 1hrs | 1.5hrs |
| 1st API data fetch | H | 3hrs| 2hrs |
| 2nd API data fetch | H | 2hrs | |
| Beautification | H | 5hrs | |
| Total | H | 16hrs|  | 

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
{Object.keys(props).map((key, index) => {
      			return (
       				<li key={key + index}>{key} : {props[key]}</li>
      			)
    		})}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
