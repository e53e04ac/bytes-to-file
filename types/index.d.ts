/*!
 * bytes-to-file/types/index.d.ts
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

import stream from 'stream';

type BytesToFileConstructorOptions = {
    location: string;
    flags?: string;
    fd?: number;
    mode?: number;
    autoClose?: boolean;
    emitClose?: boolean;
    start?: number;
    highWaterMark?: number;
};

type _BytesToFile = {

};

type BytesToFile = stream.Transform & {
    BytesToFileConstructorOptions: {
        (): BytesToFileConstructorOptions;
    };
    _BytesToFile: {
        (): _BytesToFile;
    };
};

type BytesToFileConstructor = {
    (options: BytesToFileConstructorOptions): BytesToFile;
};

export const BytesToFile: BytesToFileConstructor;
