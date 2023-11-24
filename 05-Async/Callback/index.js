function readFile(fileName, callback) {
  console.log(`Reading ${fileName}...`);

  setTimeout(function () {
    const content = `Content of ${fileName} is Hello World.`;
    console.log(`Finished reading ${fileName}.`);
    callback(content);
  }, 2000);
}

function processFile(content) {
  console.log(`Processing file content: ${content}`);
}

readFile("example.txt", processFile);

console.log("Program continues to execute other tasks...");
