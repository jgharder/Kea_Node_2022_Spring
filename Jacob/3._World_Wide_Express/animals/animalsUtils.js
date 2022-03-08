const {favorites} = require("./animals.json");

function amountOfAnimals(){
    return favorites.length
}

module.exports = {
    calculateFavoriteAnimals : amountOfAnimals
};
