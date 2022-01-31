## Review from last class

### The role of the terminal

Everything on your computer is a program. Quite a few of those programs are primarily interfaces to run other programs. E.g. even if you have nothing open and you're looking at a "blank" desktop, you are still looking at a program. On Mac, I'm pretty sure that program is `Finder`; on Windows it's going to be `explorer.exe`; on Ubuntu it's probably `gnome-shell`. The purpose of that program is to allow you access to other programs on your computer that have **graphical user interfaces**.

One of the programs you can access through your desktop application is your **web browser**. The purpose of this program is to allow you to access other programs all over the internet that have **web interfaces**. These are things like GMail, GitHub, Facebook, etc. These are programs that have interfaces optimized for access through a browser. There may be other ways to access the underlying services (e.g. you can install an email client directly on your computer and configure it to connect to GMail), and sometimes it makes sense to do so, but the web interfaces are the default.

Another program you can access through your desktop application is your **terminal**. The purpose of this program is to allow you to access other programs that have **command line interfaces**. These are things like `git`, `npm`, `python`*, etc. These are programs that have interfaces optimized for access through a terminal. There may be other ways to access the underlying services (e.g. you can install the GitHub Desktop client to interact with git repositories), and sometimes it makes sense to do so, but the command line interfaces are the default.

> \* **Note** there is a programming language called Python, but there is also a program called `python` that runs code written in the Python language. This is similar to how there is a program called `node` that runs code written in the JavaScript language. There are programs called Google Chrome and Firefox that do this as well :wink:.

### Running linter

* Run `npx eslint exercise/`

### Running tests

* Run `npx http-server --port 8000`
* Run `npx jest` in a new terminal

### Scope & `var` vs `let`

Variable and function declarations in JavaScript can have some funny behavior. Consider the following code:

```js
const logPlanetSkyColor = (planet) => {
  if (planet === 'Earth') {
    var color = 'blue';
    console.log(color); // blue
  }
  console.log(`I said the color was ${color || '🤷'} on ${planet}.`);
};

logPlanetSkyColor('Earth');  // 'I said the color was blue on Earth.'
logPlanetSkyColor('Jupiter');  // 'I said the color was 🤷 on Jupiter.'
```

```js
const logPlanetSkyColor = (planet) => {
  if (planet === 'Earth') {
    let color = 'blue';
    console.log(color); // blue
  }
  console.log(`I said the color was ${color || '🤷'} on ${planet}.`);
};

logPlanetSkyColor('Earth');  // ReferenceError: color is not defined
logPlanetSkyColor('Jupiter');  // ReferenceError: color is not defined
```

### "Hoisting"

[Hoisting on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

## Codecademy Review

### Arrays

```js
const planets2005 = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Neptune',
  'Uranus',
  'Pluto',

  /*
    In 2005, astronomer Mike Brown and his team announced the discovery of 2003
    UB_313 (later named Eris after the Greek goddess of discord and strife), a
    trans-Neptunian object then thought to be just barely larger than Pluto.
    Soon afterwards, a NASA Jet Propulsion Laboratory press release described
    the object as the "tenth planet".
  */
  '2003 UB_313',
];

const reclassifyPlanets2006 = () => {
  /*
    2003 UB_313 was never officially classified as a planet, and the August 2006
    definition of planet defined both it and Pluto not as planets but as dwarf
    planets because they have not cleared their neighbourhoods. They do not
    orbit the Sun alone, but as part of a population of similarly sized objects.
    Pluto itself is now recognized as being a member of the Kuiper belt and the
    largest dwarf planet, larger than the more-massive 2003 UB_313.
  */
  const planets = planets2005.slice(0, 8);
  const dwarfs = planets2005.slice(8);

  /*
    The name "Eris" was proposed and assigned in September 2006, following an
    unusually long period in which the object was known by the provisional
    designation 2003 UB_313.
  */
  const erisIndex = dwarfs.indexOf('2003 UB_313');
  dwarfs[erisIndex] = 'Eris';

  return [planets, dwarfs];
}

const [planets2006, dwarfs2006] = reclassifyPlanets2006();
```

### Loops

```js
// For-loops with numbers
for (let n = 0; n < 20; n++) {
  console.log(`The current value of n is ${n}.`);
}

// For-loops with arrays
const cityHalls = [
  ['Philadelphia, PA', 39.95300559019994, -75.16355840386863],
  ['Boston, MA', 42.360596245225196, -71.05796081543883],
  ['New Orleans, LA', 29.954657807897284, -90.07722927150955],
  ['Los Angeles, CA', 34.0539446937636, -118.24262111566996],
  ['Chicago, IL', 41.8840144817928, -87.6316379196909],
  ['Salt Lake City, UT', 40.75535909588556, -111.88545349526015],
];
for (const [city, lat, lng] of cityHalls) {
  console.log(`The city government administrative building in ${city} is at latitude ${lat}, longitude ${lng}.`)
}
```

> Note that the AirBnB JS style guide [prefers using higher-order functions](https://github.com/airbnb/javascript#iterators--nope) such as `forEach` over using the `for (... of ...)` syntax. Under normal circumstances, I might disable that linter rule, but that's just because I'm biased, coming from Python's `for ... in ...:` syntax.

### Higher-order functions (including iterators) and Objects

```js
const solarSystemBodies = [
  { name: 'Mercury', orbitsSun: true, isSpheroid: true, hasClearedOrbit: true },
  { name: 'Venus', orbitsSun: true, isSpheroid: true, hasClearedOrbit: true },
  { name: 'Earth', orbitsSun: true, isSpheroid: true, hasClearedOrbit: true },
  { name: 'Mars', orbitsSun: true, isSpheroid: true, hasClearedOrbit: true },
  { name: 'Jupiter', orbitsSun: true, isSpheroid: true, hasClearedOrbit: true },
  { name: 'Saturn', orbitsSun: true, isSpheroid: true, hasClearedOrbit: true },
  { name: 'Neptune', orbitsSun: true, isSpheroid: true, hasClearedOrbit: true },
  { name: 'Uranus', orbitsSun: true, isSpheroid: true, hasClearedOrbit: true },
  { name: 'Pluto', orbitsSun: true, isSpheroid: true, hasClearedOrbit: false },
  { name: 'Eris', orbitsSun: true, isSpheroid: true, hasClearedOrbit: false },
];

const isPlanet = (body) => {
  return (
    body.orbitsSun
    && body.isSpheroid
    && body.hasClearedOrbit
  );
};

const planets = solarSystemBodies
  .filter(isPlanet)
  .map((p) => p.name);
```
