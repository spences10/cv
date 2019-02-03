# CV

[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![styled components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Build Status](https://travis-ci.com/spences10/cv.svg?token=WDGHiW4Z8aNkuywpJ62W&branch=master)](https://travis-ci.com/spences10/cv)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c681317e-e8ed-44ac-878e-2ef018ea8a45/deploy-status)](https://app.netlify.com/sites/cv-scottspence/deploys)

## CV using Gatsby and [JSON Schema]

Want to use this template with your data? Read on... 👀

#### Requirements

- Zeit now account or somewhere to statically host your data
- Your own [JSON Schema] CV

I made this to understand how Gatsby gets API data and uses it, you
could probably do something statically with the data locally if you
prefer.

If you want to use this for your own purposes you will need to create
your own json CV via [JSON Schema] and create an alias for the
`cv.json` file in `now`.

There's a [resume-cli] you can use to get started with your CV,
navigate to where you want your `resume.json` file and use:

```sh
npx resume-cli init
# I prefer to use npx over globally
# installing and app I'll use rarely
```

This will create a bare bones `.json` file to use, you will be
prompted for your name and email, the rest is filler.

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
[resume-cli]: https://github.com/jsonresume/resume-cli
