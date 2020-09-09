// Learning Objective:
// - Learn to conduct a PUT request to an external API using axios

// Q: What HTTP method do web dev's use to update data?
// - We use a PUT HTTP resource method to do so.

// Q: What is PUT in CRUD?
// - PUT is the U in CRUD for UPDATE
// - CRUD is an acrynom for: create, read, update and delete.
// - We use the PUT method to alter (change) a resource's infromation
// - PUT takes in an object like POST and identifies data that needs to be updated somewhere
// i.e.
axios
  .put(`http://somecoolurl.com/${couldHaveDynamicId}`, updatedData)
  .then((res) => {
    // res will be the response I get back from the server
    // Whatever data I changed should reflect on the client side
  })
  .catch((err) => {
    // if something goes south we can handle it here
  });

// Follow Along:
// - Note* Server was not live and was unable to follow the tutorial completely, but was able to understand the basic steps of updating data on a server
// Step 1) Create an input to update state
// Step 2) Create an axios.put('serverURL/path/dynamicID', updatedData).then(res => {
//  Now the data is updated on the client side and you can display the success message if you want
// }).catch(err => {
// display the error message using my state if I so choose
// })
