'use strict';

const expect = require('chai').expect;

const FastBootGitLabAppServer = require('../');


describe('FastBootGitLabAppServer', function() {
  this.timeout(3000);

  it("throws if no url and token is provided", function() {
    expect(() => {
      new FastBootGitLabAppServer();
    }).to.throw(/must be provided with a url and a token/);
  });
});
