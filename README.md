# localopen

open things based on local protocol handlers

(work in progress)

```shell
# npm install --save localopen
```

## background

`%HjE7u1UbuSqXCMA56KyTYyvXu/S4tEh47HqUmxISNkQ=.sha256`

## demo

```shell
git clone git@github.com:ahdinosaur/localopen
cd localopen
npm install
npm run example
```

```
config:
{
  "dat:": "beaker",
  "ssb:message?type=gathering": "infinite-game",
  "ssb:message?type=chess_invite": "ssb-chess",
  "ssb:feed": "holodex",
  "ssb:": "patchwork"
}

localopen "ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w="
--> patchwork --open ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w=
localopen "ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w=?type=post"
--> patchwork --open ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w=?type=post
localopen "ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w=?type=gathering"
--> infinite-game --open ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w=?type=gathering
localopen "ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w=?type=chess_invite"
--> ssb-chess --open ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w=?type=chess_invite
localopen "dat:abcdef123"
--> beaker --open dat:abcdef123
```

## cli

TODO

## api

### `Opener = require('localopen')`

### `opener = Opener(config)`

### `command = opener(uri)`

## license

The Apache License

Copyright &copy; 2018 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
