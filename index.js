function convertValues (object) {
    let valArray = Object.values(object)
    return valArray
}

function convertKeys (object) {
    let keysArray = Object.keys(object)
    return keysArray
}

// Collection Functions

function myEach (collection, callback) {
    let objValues

    if (typeof collection === "object") {
        objValues = convertValues(collection)
    } else {
        objValues = collection
    }
    for (let item of objValues) {
        callback(item)
    } 
    return collection
}

function myMap (collection, callback) {
    let objValues
    let newArr = []

    if (typeof collection === "object") {
        objValues = convertValues(collection)
    } else {
        objValues = collection
    }
    for (let item of objValues) {
       newArr.push(callback(item))
    }
    return newArr
}

function myReduce (collection, callback, acc) {
    let objValues 

    if (typeof collection === "object") {
        objValues = convertValues(collection)
    } else {
        objValues = collection
    }

    if (acc === undefined) {
        acc = objValues[0]
        for (let i = 1; i < objValues.length; i++) {
            acc = callback(acc, objValues[i], objValues)
        }
    } else {
        for (let j = 0; j < objValues.length; j++) {
            acc = callback(acc, objValues[j], objValues)
        }
    }
    return acc
}

function myFind (collection, predicate) {
    let objValues 
    let finalVal = undefined

    if (typeof collection === "object") {
        objValues = convertValues(collection)
    } else {
        objValues = collection
    }

    for (let i = 0; i < objValues.length; i++) {
        let value = predicate(objValues[i])
        if (value === true) {
            return finalVal = objValues[i]
        }
    }
    return finalVal
}

function myFilter (collection, predicate) {
    let objValues 
    let finalValues = []

    if (typeof collection === "object") {
        objValues = convertValues(collection)
    } else {
        objValues = collection
    }

    for (let i = 0; i < objValues.length; i++) {
        let value = predicate(objValues[i])
        if (value === true) {
            finalValues.push(objValues[i])
        }
    }
    return finalValues
}

function mySize (collection) {
    let finalValue

    if (typeof collection === "object") {
       return finalValue = Object.keys(collection).length
    }

    finalValue = collection.length 
    return finalValue
}

// Array Functions

function myFirst (array, n = false) {
    let modArr 
    if (n) {
        return modArr = array.slice(0, n)
    } else {
        return modArr = array[0]
    } 
}

function myLast (array, n = false) {
    let modArr
    let lastItem = array[array.length - 1]
    if (n) {
        return modArr = array.slice(-n)
    } else {
        return lastItem
    }
}

// Object Functions

function myKeys (object) {
    let keysArr = []
    return keysArr = Object.keys(object)
}

function myValues (object) {
    let valArr = []
    return valArr = Object.values(object)
}