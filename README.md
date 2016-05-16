# Ember FastBoot GitLab App server

[![Latest NPM release][npm-badge]][npm-badge-url]
[![Dependency Status][dependency-badge]][dependency-badge-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]
[![Code Climate][codeclimate-badge]][codeclimate-badge-url]
[![Docker Layers][layers-badge]][layers-badge-url]

[npm-badge]: https://img.shields.io/npm/v/fastboot-gitlab-app-server.svg
[npm-badge-url]: https://www.npmjs.com/package/fastboot-gitlab-app-server
[dependency-badge]: https://img.shields.io/david/buschtoens/fastboot-gitlab-app-server.svg
[dependency-badge-url]: https://david-dm.org/buschtoens/fastboot-gitlab-app-server
[travis-badge]: https://img.shields.io/travis/buschtoens/fastboot-gitlab-app-server/master.svg?label=TravisCI
[travis-badge-url]: https://travis-ci.org/buschtoens/fastboot-gitlab-app-server
[codeclimate-badge]: https://img.shields.io/codeclimate/github/buschtoens/fastboot-gitlab-app-server.svg
[codeclimate-badge-url]: https://codeclimate.com/github/buschtoens/fastboot-gitlab-app-server
[layers-badge]: https://imagelayers.io/badge/buschtoens/fastboot-gitlab-app-server:latest.svg
[layers-badge-url]: https://imagelayers.io/?images=buschtoens/fastboot-gitlab-app-server:latest

This is a production-ready dockerized app server for running Ember FastBoot apps
from GitLab build artifacts using these modules:

- [fastboot-app-server](https://github.com/ember-fastboot/fastboot-app-server)
- [fastboot-gitlab-downloader](https://github.com/buschtoens/fastboot-gitlab-downloader)
- [fastboot-gitlab-notifier](https://github.com/buschtoens/fastboot-gitlab-notifier)


## Usage

### As a Docker container

```bash
$ docker run -d --restart always --name my-fastboot-server \
  -e URL="http://gitlab.example.com" \
  -e TOKEN="abcdefghij123456" \
  -p 3000:80
  buschtoens/fastboot-gitlab-app-server:latest
```

### As a stand-alone Node.js server

```bash
$ git clone https://github.com/buschtoens/fastboot-gitlab-app-server.git
$ PORT=3000 URL="http://gitlab.example.com" TOKEN="abcdefghij123456" npm start
```

### As a Node.js module

```bash
$ npm install --save fastboot-gitlab-app-server
```

```js
const FastBootGitLabAppServer = require('fastboot-gitlab-app-server');

const server = new FastBootGitLabAppServer({
  url:   process.ENV.URL,
  token: process.ENV.TOKEN
});

server.start();
```
