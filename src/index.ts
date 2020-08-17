import express from 'express';
import { crawl } from './crawl';
import { extract } from './extract';

const app = express();
const port = 3001;

// app.get('/crawl', (req, res) => {
//     // crawl 내부에서 호출될 때 res.send 메서드의 this 값이 변경되는 것을 막기 위함
//     crawl(res.send.bind(res));
// });

// app.get('/crawl', (req, res) => {
//     // crawl 내부에서 호출될 때 res.send 메서드의 this 값이 변경되는 것을 막기 위함
//     crawl().then(result => res.send(result));
// });

app.get('/crawl', async (req, res) => {
    const result = await crawl();
    // res.send(extract(result).join(', '));
    res.send(result);
});

app.listen(port, () => {
    console.log(`server started! at ${port} port`);
});

