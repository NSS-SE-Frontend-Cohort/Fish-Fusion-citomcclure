const { boatInventory } = require("./fishingBoat.js");

const NUM_FISH_TO_BUY = 10;
const MAX_BUDGET_PER_FISH = 7.5;

const buyFromBoat = () => {
    const inventoryForRestaurant = [];

    for (const fish of boatInventory()) {
        if (fish.amount >= NUM_FISH_TO_BUY && fish.price <= MAX_BUDGET_PER_FISH) {
            const boughtFish = Object.assign({}, fish);
            boughtFish.amount = NUM_FISH_TO_BUY;
            inventoryForRestaurant.push(boughtFish);
        }
    }

    return inventoryForRestaurant;
}

const mongerInventory = (budget) => {
    const sold = [];

    for (const fish of buyFromBoat()) {
        if (fish.price <= budget) {
            const soldFish = Object.assign({}, fish);
            soldFish.amount /= 2;
            sold.push(soldFish);
        }
    }

    return sold;
}

module.exports = { mongerInventory }