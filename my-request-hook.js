const { RequestHook } = require('testcafe');

exports.MyRequestHook = class MyRequestHook extends RequestHook {
    constructor (requests, responses) {
        super(() => true);

        this.requests  = requests;
        this.responses = responses;
    }

    onRequest (event) {
        this.requests.push(event);
    }

    onResponse (event) {
        this.responses.push(event);
    }
}