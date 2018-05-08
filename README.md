# CV

[![Greenkeeper badge](https://badges.greenkeeper.io/spences10/cv.svg)](https://greenkeeper.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![styled components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Build Status](https://travis-ci.com/spences10/cv.svg?branch=master)](https://travis-ci.com/spences10/cv)

## CV using React ⚛️ (`create-react-app`) and [JSON Schema]

Want to use this template with your data? Read on... 👀

#### Requirements

* Zeit now account
* Your own [JSON Schema] CV

I made this to understand how Gatsby gets API data and uses it, you
could probably do something statically with the data locally if you
prefer.

If you want to use this for your own purposes you will need to create
your own json CV via [JSON Schema] and create an alias for the
`cv.json` file in `now`.

In the folder `cvdata` there's some npm scripts to help manage the
importing and exporting the CV data.

In the `now.json` file you can add your preferred alias for where your
CV data is going to live.

Note that if you change the `"name"` value in the `now.json` file
you'll also need to change the npm scripts in `cvdata/package.json`

```json
{
  "name": "cvjson",
  "alias": "cvjson.now.sh"
}
```

Add your cv.json to the folder:

```sh
cvdata/cvjson/cv.json
```

You can then upload to now with the npm scripts provided:

```sh
npm run pushCv
# pull data for editing
npm run pullCv
# after running pushCv the following scripts run
npm run aliasIt # alias' the deployment
npm run killCv # removes local cv data
npm run cleanup # removes stale deploys
```

<!-- Links -->

[json schema]: https://jsonresume.org/schema/
