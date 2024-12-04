// Code your solution here
// Function 1: findMatching
// Case-insensitive match for drivers' names
function findMatching(drivers, query) {
    return drivers.filter((driver) => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Function 2: fuzzyMatch
  // Match drivers whose names begin with the provided query string
  function fuzzyMatch(drivers, query) {
    return drivers.filter((driver) => driver.startsWith(query));
  }
  
  // Function 3: matchName
  // Match driver objects whose 'name' property matches the query string
  function matchName(drivers, query) {
    return drivers.filter((driver) => driver.name === query);
  }
  
  // Example Usage
  const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
  const driverObjects = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sammy", hometown: "Los Angeles" },
    { name: "Sally", hometown: "Cleveland" },
    { name: "Annette", hometown: "Chicago" },
    { name: "Sarah", hometown: "San Francisco" },
  ];
  
  // Test findMatching
  console.log("findMatching:", findMatching(drivers, "bobby"));
  // Output: ["Bobby", "Bobby"]
  
  // Test fuzzyMatch
  console.log("fuzzyMatch:", fuzzyMatch(drivers, "Sa"));
  // Output: ["Sammy", "Sally", "Sarah"]
  
  // Test matchName
  console.log("matchName:", matchName(driverObjects, "Bobby"));
  // Output: [{ name: "Bobby", hometown: "New York" }]
  