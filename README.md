![preview](https://github.com/Captain-Ravioli/clock/assets/48518572/6252020d-f223-4d26-996a-9dfc7707aef4)
# clock - a kiosk display for a bunch of stuff
## requirements
- npm
- internet (optional)
## installation
```bash
git clone https://github.com/Captain-Ravioli/clock
cd clock/
npm start
```
by default, the node server runs on port 8000, so you can see the website on http://localhost:8000/
# configuration
- you can change what gets displayed and at what position in `views/index.ejs`. there are 5 positions available by default: center, top, bottom, left, right
- colors can be changed from the files `views/index.ejs`, `public/js/script.js`, and `public/css/style.css`
- you can add new modules (the dynamic shit that gets displayed) by creating new functions in `public/js/script.js` and adding `f(); setInterval(f, whateverYouWant);` to `window.onload()`
> for consistency and simplicity i use divs and spans for elements, and ids to get modules in js
- you can add new positions for modules by changing `public/css/style.css` (i use classes)
---
pull requests, constructive criticism and bounties for my warcrimes are welcome
