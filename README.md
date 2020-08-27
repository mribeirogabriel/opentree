[![N|Solid](https://raw.githubusercontent.com/mribeirogabriel/opentree/master/src/assets/images/heart.png)](https://github.com/mribeirogabriel/opentree)

# OpenTree
Opentree is a Open clone of Linktree UI.

  - Unify your Social Media links.
  - Send followers anywhere: articles, webstore, events and more.

# Instalation:
```
$ git clone https://github.com/mribeirogabriel/opentree
$ cd opentree
$ yarn
```
You need run this app and open your browser...

```sh
$ yarn start
```
Customize your links on main page.
```sh
$ code /src/pages/main.js
```
Edit links variables.
```js
const profileName = 'Profile Name'
const pageTitle = profileName + ' | Social Media Links'

const githubLink = 'https://github.com/mribeirogabriel/opentree'

const linkList = {
    'Instagram': ['https://instagram.com', instagramLogo],
    'Twitter': ['https://twitter.com', twitterLogo],
    'Youtube': ['https://youtube.com', youtubeLogo],
    'Twitch': ['https://twitch.com', twitchLogo],
    'Facebook':['https://facebook.com', facebookLogo]
}
```
[![N|Solid](https://raw.githubusercontent.com/mribeirogabriel/opentree/master/src/assets/images/screen.png)](https://github.com/mribeirogabriel/opentree)
### [Live Demo](about.izalu.com)
