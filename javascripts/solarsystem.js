"use strict";

const earth = require("./earth");
const jupiter = require("./jupiter");
const mercury = require("./mercury");
const mars = require("./mars");
const neptune = require("./neptune");
const saturn = require("./saturn");
const uranus = require("./uranus");
const venus = require("./venus");

const SolarSystem = {
	earth, jupiter, mercury, mars, neptune, saturn, uranus, venus
};

module.exports = SolarSystem;