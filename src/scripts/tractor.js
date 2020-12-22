import { addPlant, usePlants } from './field.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js'



export const plantSeeds = (plantingPlan) => { //the plantingPlan needs to be an array
    //let plants = usePlants()
    for (const i of plantingPlan) {
        for (const j of i) {
            
            if (j === "Asparagus") {
                const asparagus =  createAsparagus()
                addPlant(asparagus)
            } else if (j === "Corn") {
                const corn = createCorn()
                addPlant(corn)
            } else if (j === "Potato") {
                const potato = createPotato()
                addPlant(potato)
            } else if (j === "Soybean") {
                const soybean = createSoybean()
                addPlant(soybean)
            } else if (j === "Sunflower") {
                const sunflower = createSunflower()
                addPlant(sunflower)
            } else if (j === "Wheat") {
                const wheat = createWheat()
                addPlant(wheat)
            }
        
        }
        //return plants    
    }
   return plantingPlan 
}


/*
we neeed to get the yearly plan.
the yearly plan is in main.js, but I can't access that from here, so I also need to import createPlan() and catch it in a yearlyPlan variable
then I need to pass the yearly plan into the plantSeeds function
*/