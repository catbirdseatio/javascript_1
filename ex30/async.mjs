import { promises as fs} from 'fs';

const read_file = async (fname) => {
    try {
        let file = await fs.open(fname, 'r');
        let stat = await file.stat();
        let buffer = Buffer.alloc(stat.size);
        let result = await file.read(buffer, 0, stat.size, null);
        console.log(`Read ${result.byteRead} bytes:\n${result.buffer.toString()}`)
    } catch (err) {
        console.log("ERROR", err);
    }
}

// see the async.mjs version
await read_file('test.txt');