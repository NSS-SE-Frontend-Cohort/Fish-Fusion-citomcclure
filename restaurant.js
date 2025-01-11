const { mongerInventory } = require("./fishMonger.js");

const fishMenu = (maxPrice) => {
    const fishes = mongerInventory(maxPrice);

    let htmlString = `<h1>Menu</h1>\n<article class="menu">`

    // for (const fish of fishes) {
    //     htmlString += `\n\t<h2>${fish.species}</h2>
    //     <section class="menu__item">${fish.species} Soup</section>
    //     <section class="menu__item">${fish.species} Sandwich</section>
    //     <section class="menu__item">Grilled ${fish.species}</section>\n`;
    // }

    fishes.map(fish => 
    htmlString += `\n<h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>\n`);

    htmlString += `</article>`;

    return htmlString;
}

module.exports = { fishMenu }