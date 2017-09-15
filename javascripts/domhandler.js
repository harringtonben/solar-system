"use strict";
let planetString = ``;
const SolarSystem = require("./solarsystem");

let earth = SolarSystem.earth();
let jupiter = SolarSystem.jupiter();
let mars = SolarSystem.mars();
let mercury = SolarSystem.mercury();
let neptune = SolarSystem.neptune();
let saturn = SolarSystem.saturn();
let venus = SolarSystem.venus();
let uranus = SolarSystem.uranus();

let solarSystemArray = earth.concat(jupiter, mars, mercury, neptune, saturn, venus, uranus);


const printPlanets = (planet) => {
for (var i=0; i < planet.length; i++) {
	planetString += `<div>
						<h2>${planet[i].planetname}</h2>
						<h3>${planet[i].yeardiscovered}</h3>
						<p>${planet[i].mass}</p>
						<p>${planet[i].size}</p>
						<p>${planet[i].distancetosun}</p>
						<p>${planet[i].atmosphere}</p>
					</div>`;
	}
};

printPlanets(solarSystemArray);

module.exports = planetString;