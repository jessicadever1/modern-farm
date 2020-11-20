import { createPlan } from './plan.js';
import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js'
const yearlyPlan = createPlan();

export const plantSeeds = (plantingPlanPlaceholder) => {
    for (let i = 0; i < plantingPlanPlaceholder.length; i++) {
        for (let j = 0; j < plantingPlanPlaceholder[i].length; j++) {
            let seed = {}
            if (plantingPlanPlaceholder[i][j] = "Asparagus") {
                seed = createAsparagus()
            } else if (plantingPlanPlaceholder[i][j] = "Corn") {
                seed = createCorn()
            } else if (plantingPlanPlaceholder[i][j] = "Potato") {
                seed = createPotato()
            } else if (plantingPlanPlaceholder[i][j] = "Soybean") {
                seed = createSoybean()
            } else if (plantingPlanPlaceholder[i][j] = "Sunflower") {
                seed = createSunflower()
            } else if (plantingPlanPlaceholder[i][j] = "Wheat") {
                seed = createWheat()
            }
        return seed
        }
    }
}

plantSeeds(yearlyPlan);

/*
we neeed to get the yearly plan.
the yearly plan is in main.js, but I can't access that from here, so I also need to import createPlan() and catch it in a yearlyPlan variable
then I need to pass the yearly plan into the plantSeeds function
*/