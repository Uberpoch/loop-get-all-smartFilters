const fs = require('fs');
exports.generateFile = async(res, file) => {

    let data = JSON.stringify(res, null, 2);
    fs.writeFileSync(`${file}.json`, data);
    console.log('json created');
  };