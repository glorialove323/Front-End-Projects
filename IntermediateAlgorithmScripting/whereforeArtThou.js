// Wherefore art thou
// Make a
// function that looks through an array of objects(first argument) and returns an array of all objects that have matching property and value pairs(second argument).Each property and value pair of the source object has to be present in the object from the collection
// if it is to be included in the returned array.

// Global Object
// Object.prototype.hasOwnProperty()
// Object.keys()



function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function(obj) {
        for (var i = 0; i < srcKeys.length; i++) {
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
