'use strict';

const assert = require('assert');

const GitLabDownloader = require('fastboot-gitlab-downloader');
const GitLabNotifier   = require('fastboot-gitlab-notifier');

const FastBootAppServer = require('fastboot-app-server');


class FastBootGitLabAppServer extends FastBootAppServer {
  constructor({ url, token, workerCount, ui }) {
    assert(url && token, 'FastBootGitLabAppServer must be provided with a url and a token option.');

    const downloader = new GitLabDownloader({ url, token });
    const notifier   = new GitLabNotifier({ url, token });

    super({ downloader, notifier, workerCount, ui });
  }
}


module.exports = FastBootGitLabAppServer;
