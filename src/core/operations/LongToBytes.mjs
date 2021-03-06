/**
 * @author clubby789 [github.com/clubby789]
 * @copyright Crown Copyright 2020
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";

/* global BigInt */

/**
 * Long to Bytes Operation
 */
class LongToBytes extends Operation {

    /**
     * LongToBytes constructor
     */
    constructor() {
        super();

        this.name = "Long to Bytes";
        this.module = "Default";
        this.description = "Converts a long integer to an array of bytes. <br><br>e.g. <code>310939249775</code> becomes <code>Hello</code>";
        this.inputType = "string";
        this.outputType = "byteArray";
        this.checks = [
            {
                pattern: "^[0-9]*$"
            }
        ];
    }

    /**
     * @param {string} input
     * @returns {byteArray}
     */
    run(input, args) {
        const byteArray = [];
        let long = BigInt(input.replace(/[^\d]/g, ""));
        for (let index = 0; long > BigInt(0); index ++) {
            const byte = long & BigInt(0xff);
            byteArray.unshift(Number(byte));
            long = (long - byte) / BigInt(256) ;
        }

        return byteArray;
    }

}

export default LongToBytes;
