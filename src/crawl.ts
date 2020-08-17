import request from 'request';
import { Send } from 'express';

// export const crawl = (callback: Send) => {
//     request.get('https://naver.com', (err, res) => {
//         if(err) callback('');
//         console.log(res.body);
//     });
// };

// export const crawl = () => {
//     new Promise<string>((resolve, reject) => {
//         request.get('https://naver.com', (err, res) => {
//             if (err) reject(err);
//             resolve(res.body);
//         });
//     });
// }

export const crawl = () =>
    // Promise 옆에 꺾쇠로 string을 감싸서 표현한 문법을 제네릭이라고 합니다.
    // 자세한 설명은 아래 링크를 참고해보세요.
    // https://ahnheejong.gitbook.io/ts-for-jsdev/03-basic-grammar/generics
    new Promise<string>((resolve, reject) => {
        request.get('https://naver.com', (err, res) => {
            console.log(res.body);
            console.log('일단 여그 까지 ');
            if (err) reject(err);
            resolve(res.body);
        });
    });