// Import the promises version of the 'fs' module
const fs = require('fs').promises;

// Define a class named 'Data' to represent the structure of the data
class Data {
  constructor(students, courses) {
    this.students = students;
    this.courses = courses;
  }
}

// Initialize a variable to hold the data collection
let dataCollection = null;

// Function to initialize data by reading files and parsing JSON
function initialize() {
  return new Promise(async (resolve, reject) => {
    try {
      // Read student data from the 'students.json' file
      const studentsData = await fs.readFile('./data/students.json', 'utf8');
      // Read course data from the 'courses.json' file
      const coursesData = await fs.readFile('./data/courses.json', 'utf8');

      // Parse the JSON data into objects
      const students = JSON.parse(studentsData);
      const courses = JSON.parse(coursesData);

      // Create a new instance of the 'Data' class with the parsed data
      dataCollection = new Data(students, courses);

      // Resolve the promise to indicate successful initialization
      resolve();
    } catch (error) {
      // Reject the promise with an error message if there is an issue during initialization
      reject("Failed to initialize data");
    }
  });
}

// Function to retrieve all students
function getAllStudents() {
  return new Promise((resolve, reject) => {
    // Check if dataCollection is available and has students
    if (dataCollection && dataCollection.students.length > 0) {
      // Resolve the promise with the array of students
      resolve(dataCollection.students);
    } else {
      // Reject the promise with a message if no students are found
      reject("No students found");
    }
  });
}

// Function to retrieve Teaching Assistants (TAs)
function getTAs() {
  return new Promise((resolve, reject) => {
    // Check if dataCollection is available
    if (dataCollection) {
      // Filter students to get those who are TAs
      const tas = dataCollection.students.filter(student => student.TA);
      if (tas.length > 0) {
        // Resolve the promise with the array of TAs
        resolve(tas);
      } else {
        // Reject the promise with a message if no TAs are found
        reject("No TAs found");
      }
    } else {
      // Reject the promise with a message if dataCollection is not initialized
      reject("Data not initialized");
    }
  });
}

// Function to retrieve all courses
function getCourses() {
  return new Promise((resolve, reject) => {
    // Check if dataCollection is available and has courses
    if (dataCollection && dataCollection.courses.length > 0) {
      // Resolve the promise with the array of courses
      resolve(dataCollection.courses);
    } else {
      // Reject the promise with a message if no courses are found
      reject("No courses found");
    }
  });
}

// Export the functions to be used in other modules
module.exports = { initialize, getAllStudents, getTAs, getCourses };
