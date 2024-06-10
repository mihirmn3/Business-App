// var express = require('express');
const generateId = async (model) => {
    let lastElement = await model.findOne().sort({_id: -1}).limit(1);
    try{
        let modelName = model.modelName.toLowerCase();
        let modelId = modelName + "Id";
        var newId = lastElement[modelId];
        newId = newId + 1;
    }
    // Collection is empty
    catch{
        newId = 1;
    }
    return newId;
};

module.exports = generateId;