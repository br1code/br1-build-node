const Cat = require('../models/cat');

async function getCats() {
    const cats = await Cat.Entity.find();

    return cats;
}

async function getCatByID(id) {
    const cat = await Cat.Entity.findById(id);

    return cat;
}

async function createCat(cat) {
    const { error } = Cat.Validate(cat);

    if (error) throw new Error(error.details[0].message);

    const newCat = await Cat.Entity.create({ 
        name: cat.name,
        age: cat.age
     });

     return newCat;
}

async function updateCat(id, cat) {
    const { error } = Cat.Validate(cat);

    if (error) throw new Error(error.details[0].message);

    const updatedCat = await Cat.Entity.findByIdAndUpdate(id, {
        name: cat.name,
        age: cat.age
    }, { new: true });

    return updatedCat;
}

async function deleteCat(id) {
    const deletedCat = await Cat.Entity.findByIdAndRemove(id);

    return deletedCat;
}

module.exports = {
    getCats,
    getCatByID,
    createCat,
    updateCat,
    deleteCat
};