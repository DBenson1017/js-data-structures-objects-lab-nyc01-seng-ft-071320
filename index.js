// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(object, key, value){
    let newObject = Object.assign({}, object, {[key]: `${value}`})
    return newObject
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
    object[key]=value
    return object
}