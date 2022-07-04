let fs = require("fs");

fs.readFile('blog1.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log('index.js wurde eingelesen');
    console.log(data.toString());

    fs.writeFile('blog3.txt', "whaddup this is blog3.txt", err => {
        if (err) {
            return err;
        }
    })
})