/*!
 * bytes-to-file/src/index.jss
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const fs = require('fs');

const { BytesToFile } = (() => {

    /** @typedef BytesToFileConstructorOptions @type {import('../types').BytesToFileConstructorOptions} */
    /** @typedef _BytesToFile @type {import('../types')._BytesToFile} */
    /** @typedef BytesToFile @type {import('../types').BytesToFile} */
    /** @typedef BytesToFileConstructor @type {import('../types').BytesToFileConstructor} */

    /** @type {BytesToFileConstructor}  */
    const BytesToFile = (options) => {

        /** @type {BytesToFileConstructorOptions}  */
        const _options = {};
        _options.location = options.location;
        _options.flags = options.flags;
        _options.fd = options.fd;
        _options.mode = options.mode;
        _options.autoClose = options.autoClose;
        _options.emitClose = options.emitClose;
        _options.start = options.start;
        _options.highWaterMark = options.highWaterMark;

        /** @type {_BytesToFile}  */
        const _it = {};

        /** @type {BytesToFile}  */
        // @ts-ignore
        const it = new fs.createWriteStream(_options.location, {
            flags: _options.flags,
            encoding: 'binary',
            fd: _options.fd,
            mode: _options.mode,
            autoClose: _options.autoClose,
            emitClose: _options.emitClose,
            start: _options.start,
            highWaterMark: _options.highWaterMark
        });
        it.BytesToFileConstructorOptions = () => {
            return _options;
        };
        it._BytesToFile = () => {
            return _it;
        };
        return it;

    };
    return { BytesToFile };

})();

module.exports = { BytesToFile };
