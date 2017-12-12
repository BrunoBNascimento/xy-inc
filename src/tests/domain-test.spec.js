'use strict'

const expect = require('chai').expect;
const fs = require('fs');

let domains = fs.readFileSync(__dirname + '/../services/domains.json', 'utf-8')
domains = JSON.parse(domains);

describe('"domains"', () => {
    it('content of domains.json need to be an array', () => {
        expect(domains).to.be.a('array')
    })
})