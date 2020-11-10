export const getPoetry = () => {
    return fetch('https://v1.jinrishici.com/all.json',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
        .then((result) => {
            let res = [];
            res.push(result.origin);
            res.push(result.author);
            res.push(result.content);
            return res;
        })
        .catch(result => {
            console.log(result);
        });
};