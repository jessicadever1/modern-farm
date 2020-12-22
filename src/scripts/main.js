import { createPlan } from './plan.js'
const yearlyPlan = createPlan();
console.log(yearlyPlan);

// import { createAsparagus } from "./seeds/asparagus.js"
// const asparagusSeed = createAsparagus()
// import {createCorn } from "./seeds/corn.js"
// const cornSeed = createCorn()
// console.log(asparagusSeed)

import { usePlants } from './field.js'
usePlants()
// console.log(copyOfPlantedSeeds)

import { plantSeeds } from './tractor.js'
const plantedField = plantSeeds(yearlyPlan)
console.log(plantedField)

import { harvestPlants } from './harvester.js'
harvestPlants(plantedField)