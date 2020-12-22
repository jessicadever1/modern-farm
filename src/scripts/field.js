// import { plantSeeds } from './tractor.js'
// const plantedSeeds = plantSeeds()

const plantsInField = []

export const addPlant = (seedObjectPlaceholder) => {
    if (Array.isArray(seedObjectPlaceholder) === true) {
        plantsInField.push(seedObjectPlaceholder[0])
        plantsInField.push(seedObjectPlaceholder[1])
    } else {
        plantsInField.push(seedObjectPlaceholder)
    }
}
// addPlant(plantedSeeds)

export const usePlants = () => {
    return plantsInField.slice();
}