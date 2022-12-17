const fs = require('fs').promises;

// you have to do nested calls any time you need the result of the previous calculation

const read_file = (fname) => {
  fs.open(fname, 'r').then((fh) => {
    fh.stat().then((stat) => {
      let buf = Buffer.alloc(stat.size);

      fh.read(buf, 0, stat.size, null)
        .then((result) => {
          console.log(`Read ${result.bytesRead} bytes: ${result.buffer.toString()}`);
        }).catch((err) => {
          console.error(err);
        });
    }).catch((err) => console.error(err));
  }).catch((err) => console.error(err));
}

read_file('test.txt');