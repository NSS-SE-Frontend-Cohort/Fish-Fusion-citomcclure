const { mongerInventory } = require("./fishMonger.js");

const fishMenuOriginal = (maxPrice) => {
    const fishes = mongerInventory(maxPrice);

    let htmlString = `<h1>Menu</h1>\n<article class="menu">`

    fishes.map(fish => 
    htmlString += `\n<h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>\n`);

    htmlString += `</article>`;

    return htmlString;
}

const fishMenu = maxPrice => 

    ['<h1>Menu</h1>\n<article class="menu">',

        mongerInventory(maxPrice).map(fish => 

            `\n<h2>${fish.species}</h2>
<section class="menu__item">${fish.species} Soup</section>
<section class="menu__item">${fish.species} Sandwich</section>
<section class="menu__item">Grilled ${fish.species}</section>\n`),

    "</article>"].join(""); 

module.exports = { fishMenu }