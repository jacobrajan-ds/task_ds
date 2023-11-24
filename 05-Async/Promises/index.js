const orderFood = new Promise((resolve, reject) => {
  const isOrderSuccessful = true;

  if (isOrderSuccessful) {
    resolve("Your food is delivered!");
  } else {
    reject("Sorry, there was an issue with your order.");
  }
});

orderFood
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
