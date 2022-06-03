var string = 'Hello world'
console.log(string)

function upperCase (fullText) {
    return fullText.toLocaleUpperCase();
}

console.log(upperCase(string))

function lowerCasse (fullText) {
    return fullText.toLocaleLowerCase()
}
console.log(lowerCasse(string))

function lowerAndUpperTogether (fullText) {
    return upperCase(fullText).concat(lowerCasse(fullText))
}
console.log(lowerAndUpperTogether(string))

function stringCenter(fullText) {
    return Math.floor(fullText.length/2)
}

var stringCenterVar =  stringCenter(string)

console.log(stringCenterVar)


function firstCapFunc (fullText) {
    return fullText.slice(0,stringCenter(fullText)).toLocaleUpperCase() 
}
var firstCap = firstCapFunc(string)

function lastLowerFunc (fullText) {
    return fullText.slice(stringCenter(fullText)).toLocaleLowerCase()
}

var lastLower = lastLowerFunc(string)

var result = firstCap.concat(lastLower)
console.log(result)



