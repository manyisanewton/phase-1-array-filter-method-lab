// Code your solution here

function findMatching(drivers, query) {
    return drivers.filter((driver) => driver.toLowerCase() === query.toLowerCase());
  }

  function fuzzyMatch(drivers, query) {
    return drivers.filter((driver) => driver.startsWith(query));
  }
  
  
  function matchName(drivers, query) {
    return drivers.filter((driver) => driver.name === query);
  }
  
  const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
  const driverObjects = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sammy", hometown: "Los Angeles" },
    { name: "Sally", hometown: "Cleveland" },
    { name: "Annette", hometown: "Chicago" },
    { name: "Sarah", hometown: "San Francisco" },
  ];
  
  console.log("findMatching:", findMatching(drivers, "bobby"));
 
  console.log("fuzzyMatch:", fuzzyMatch(drivers, "Sa"));
  
  console.log("matchName:", matchName(driverObjects, "Bobby"));
 
  