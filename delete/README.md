# Scott Spence - CV under construction 👷‍♀️🛠

[![Greenkeeper badge](https://badges.greenkeeper.io/spences10/online-cv.svg)](https://greenkeeper.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![styled components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Build Status](https://travis-ci.org/spences10/online-cv.svg?branch=master)](https://travis-ci.org/spences10/online-cv)

CV using React ⚛️ (`create-react-app`) and [JSON Schema]

## Requirements

* Zeit now account
* Your own [JSON Schema] CV

If you want to use this for your own purposes you will need to create
your own json CV via [JSON Schema] and create an alias for the cv.json
in now.

Add your cv.json and folder in src:

```sh
src/cvjson/cv.json
```

You can then upload to now with the npm scripts provided:

```sh
npm run loadCv
# remove stale versions with
npm run clearStale
```

<!-- Links -->

[json schema]: https://jsonresume.org/schema/
