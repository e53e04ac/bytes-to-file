/*!
 * bytes-to-file/test/index.test.js
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const fs = require('fs');
const stream = require('stream');

const chai = require('chai');

describe('index.js', async () => {

    const { BytesToFile } = require('../');

    const tmpDataFilePath = './tmp.data';

    it('coverage', async () => {

        const input = new stream.Readable({
            objectMode: false,
            read: (size) => {
                input.push(Buffer.from([0]));
                input.push(null);
            }
        })

        const bytesToFile = BytesToFile({
            location: tmpDataFilePath
        });
        bytesToFile.BytesToFileConstructorOptions();
        bytesToFile._BytesToFile();

        await new Promise((resolve, reject) => {
            stream.pipeline([
                input,
                bytesToFile
            ], (error) => {
                if (error != null) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

    });

    after(async () => {
        await fs.promises.unlink(tmpDataFilePath).catch((error) => {
            console.log(error);
        });
    });

});
