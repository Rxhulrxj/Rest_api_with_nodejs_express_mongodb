const https = require("https");
const fs = require("fs");

// URL of the image
const url = "https://scopeindia.org/images/scope-india-logo-bird.png";

https.get(url, (res) => {
  const path = "downloaded-image.jpg";
  const writeStream = fs.createWriteStream(path);

  res.pipe(writeStream);

  writeStream.on("finish", () => {
    writeStream.close();
    console.log("Download Completed!");
  });
});
