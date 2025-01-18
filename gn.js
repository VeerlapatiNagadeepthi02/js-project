const fs = require("fs")

fs.unlink('./hello.txt', (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
  });
