# Ember FastBoot GitLab App server

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
