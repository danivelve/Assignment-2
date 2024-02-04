/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name:Daniel Dadzie Appiah  Student ID:156801227  Date:3rd February, 2024.
*
********************************************************************************/ 


// Import the collegeData module
const collegeData = require('./modules/collegeData');

// Asynchronous function to run the application
async function run() {
  try {
    // Initialize collegeData
    await collegeData.initialize();
    console.log("Initiallization successful");

    // Retrieve all students and display the number
    const students = await collegeData.getAllStudents();
    console.log(`Successfully retrieved ${students.length} students`);

    // Retrieve all courses and display the number
    const courses = await collegeData.getCourses();
    console.log(`Successfully retrieved ${courses.length} courses`);

    // Retrieve all TAs (Teaching Assistants) and display the number
    const tas = await collegeData.getTAs();
    console.log(`Successfully retrieved ${tas.length} TAs`);
  } catch (error) {
    // Handle errors by logging them to the console
    console.error(error);
  }
}

// Run the application by invoking the 'run' function
run();



