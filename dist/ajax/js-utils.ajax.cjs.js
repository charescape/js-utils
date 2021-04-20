'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function create(axios) {
    return axios.create({
        timeout: 60 * 1000,
    });
}

exports.create = create;
