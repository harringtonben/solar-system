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
	planetString += `<div class="col-md-3 planets">
						<img class ="images" src="${planet[i].image}">
						<h2>${planet[i].planetname}</h2>
						<p>Year Discovered: ${planet[i].yeardiscovered}</p>
						<p>Planet Mass: ${planet[i].mass}</p>
						<p>Planet Size: ${planet[i].size}</p>
						<p>Distance To The Sun: ${planet[i].distancetosun}</p>
						<p>Planet Atmosphere: ${planet[i].atmosphere}</p>
						<p>Satellites: ${planet[i].satellites}</p>
						<p>Orbiters: ${planet[i].orbiters}</p>
					</div>`;
	}
};

printPlanets(solarSystemArray);

module.exports = planetString;