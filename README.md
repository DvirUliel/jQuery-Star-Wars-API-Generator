# Star Wars API Generator

![Uploading צילום מסך 2024-10-05 ב-20.31.43.png…]()

## Description
The Star Wars API Generator is a simple web application that allows users to fetch and display random character information from the Star Wars API. Using jQuery, the app dynamically updates the page with character data, including name, height, mass, gender, species, homeworld, and a link to the corresponding wiki page.

## Technologies Used
- HTML
- CSS
- jQuery
- JavaScript

## Features
- Fetches random Star Wars character data from the API.
- Displays character information such as:
  - Name
  - Height
  - Mass
  - Gender
  - Species
  - Homeworld
  - Wiki link
- Responsive design with a visually appealing background and layout.
## jQuery Usage
In this project, jQuery is employed to streamline JavaScript operations, particularly for DOM manipulation and AJAX requests:

1. **DOM Ready Event**: 
   The `$(document).ready()` function ensures that the code runs only after the DOM is fully loaded. This prevents any attempt to access HTML elements before they are available.

   ```javascript
   $(document).ready(function(){
       // Code here runs after the document is ready
   });
   
2. **Event Handling**
   The project listens for a button click event to trigger the fetching of random character data.
   The $("button").on("click", function() { ... }) method is used to attach a click event handler to the button.

3. **AJAX Requests**
   jQuery's $.get() method simplifies the process of making HTTP GET requests.
   This method is utilized to retrieve data from the Star Wars API based on a randomly generated character ID.
   
## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/DvirUliel/jQuery-Star-Wars-API-Generator.git
2. Open jQuery_project.html in your web browser.
