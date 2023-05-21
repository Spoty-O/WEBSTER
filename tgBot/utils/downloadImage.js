const axios = require('axios');
const { createWriteStream, createWriteStreamSync } = require('fs');
const path = require('path');

const downloadImage = async (url, filename) => {
    try {
        const fileType = url.split('.').pop();
        const imgPath = path.resolve(__dirname, '../static/images', `${filename}.${fileType}`);
        const { data } = await axios({
            method: 'get',
            url,
            responseType: 'stream',
        });
        return new Promise((resolve) => {
            const stream = createWriteStream(imgPath);
            data.pipe(stream);
            stream.on('finish', async () => {
                resolve(imgPath);

            })
        })
    } catch (error) {
        console.log('Error: ', error.message)
    }
}

module.exports = downloadImage