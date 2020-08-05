<div align="center">
  <p>
    <a href="https://discord.gg/q6eMWS2"><img src="https://discordapp.com/api/guilds/616371260569681930/embed.png" alt="Serveur Discord" /></a>
    <a href="https://www.npmjs.com/package/concord-manager"><img src="https://img.shields.io/npm/v/concord-manager.svg?maxAge=3600" alt="Version NPM" /></a>
    <a href="https://www.npmjs.com/package/concord-manager"><img src="https://img.shields.io/npm/dt/concord-manager.svg?maxAge=3600" alt="Téléchargements NPM" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/discord.js/"><img src="https://nodei.co/npm/concord-manager.png?downloads=true&stars=true" alt="Informations NPM" /></a>
  </p>
</div>

## À propos
concord-manager est un module NPM permettant de récupérer une texte au singulier ou au pluriel en fonction d'une valeur numérale associée.

- Simple d'utilisation
- Utile
- Rapide mise en place

## Installation

`npm install concord-manager`

## Exemple d'utilisation
```js
const ConcordManager = require('concord-manager');

console.log(ConcordManager(1, ['utilisateur', "utilisateurs"])) // -> "utilisateur"
console.log(ConcordManager(37, ['utilisateur', "utilisateurs"])) // -> "utilisateurs"
console.log(ConcordManager(-8, ['utilisateur', "utilisateurs"])) // -> RangeError
```

## Liens

* [GitHub](https://github.com/Nyfos/concord-manager)
* [NPM](https://www.npmjs.com/package/concord-manager)
