# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Screenshots

_Mobile_:

[![mobile](https://i.postimg.cc/Prgd13Wz/image.png)](https://postimg.cc/hf0FB03f)

_Desktop_:

[![desktop](https://i.postimg.cc/CKNYTwWm/image.png)](https://postimg.cc/8FjxLgk6)

## Links

- [repo](https://github.com/ha308ing/fm_four-card-feature-section)
- [demo](https://ha308ing.github.io/fm_four-card-feature-section)

## Built with

- gulp [watch](https://gulpjs.com/docs/en/api/watch/)
- pug [includes](https://pugjs.org/language/includes.html)
- postcss [postcss.parts](https://www.postcss.parts/)

## What I learned

When copying images with gulp `src(...).pipe(dest(...))`, do not forget to add to `src` option `{encoding: false}`:

`src(..., {encoding: false}).pipe(dest(...))`
