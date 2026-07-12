// Task 01
// Iterating with Async/Await

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await delay(1000);
    }
  }
  
  iterateWithAsyncAwait(["HTML", "CSS", "JavaScript"]);
  
  
  // --------------------------------------------------
  
  // Task 02 + Task 03
  // Awaiting a Call + Error Handling
  
  function fakeApiCall() {
    return new Promise((resolve, reject) => {
      const success = true;
  
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully");
        } else {
          reject("API request failed");
        }
      }, 2000);
    });
  }
  
  async function awaitCall() {
    try {
      const data = await fakeApiCall();
      console.log(data);
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  }
  
  awaitCall();
  
  
  // --------------------------------------------------
  
  // Bonus Task
  // Chaining Async Functions
  
  async function firstFunction() {
    await delay(1000);
    console.log("First function done");
  }
  
  async function secondFunction() {
    await delay(1000);
    console.log("Second function done");
  }
  
  async function thirdFunction() {
    await delay(1000);
    console.log("Third function done");
  }
  
  async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
  }
  
  chainedAsyncFunctions();
  
  
  // --------------------------------------------------
  
  // Task 04
  // Concurrent Requests
  
  function fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("User data");
      }, 2000);
    });
  }
  
  function fetchPosts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Posts data");
      }, 1500);
    });
  }
  
  async function concurrentRequests() {
    try {
      const results = await Promise.all([
        fetchUser(),
        fetchPosts(),
      ]);
  
      console.log("Concurrent Results:", results);
    } catch (error) {
      console.log(error);
    }
  }
  
  concurrentRequests();