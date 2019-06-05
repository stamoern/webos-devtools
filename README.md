# webos-devtools
Devtools For LG webOS Applications

Default webOS DevTools sometimes can be broken. This repo contains fixed DevTools for different versions of webOS:
- webOS 3.* and lower -> [branch webos-3](tree/webos-3), based on Chromium 38.0.2125.122
- webOS 4.* -> [branch webos-4](tree/webos-4), based on Chromium 58.0.3029.110

## How To Run DevTools
To start DevTools you should checkout to specific branch and run static http server in `front_end` folder.

That's all! Now you can open DevTools on url like: `http://localhost:8090/front_end/inspector.html?ws={websocket url for page you want to inspect}`
