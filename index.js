// this is to set the value of options needed for the password
const filterCheck = {
    number: true,
    lower: true,
    upper: false,
    symbol: true
}

// set the length of the password to be generated
const length = 23

// the key value pairs of the option values nd thier corresponding function
const calls = {
    number: number,
    lower: lowerCase,
    upper: upperCase,
    symbol: symbol
}



function generatePassword(length){
    const then = Date.now()
    let generatedPass =  "";
    let mainCheck = []
    for (let [keys,values] of Object.entries(filterCheck)){
        if(values) mainCheck.push(keys)
    }
    for (let i = 0; i < length; i += mainCheck.length){
        mainCheck.forEach( item => {
            generatedPass += calls[item]()
        });
    }
    const now = Date.now()
    console.log( now - then)
    return generatedPass
    
}

function lowerCase(){
    const lower = Math.floor(Math.random()*26 + 97);
    return String.fromCodePoint(lower)
}
function upperCase(){
    const lower = Math.floor(Math.random()*26 + 65);
    return String.fromCodePoint(lower)
}
function number(){
    const lower = Math.floor(Math.random()*10 + 48);
    return String.fromCodePoint(lower)
}
function symbol(){
    const lower = Math.floor(Math.random()*10 + 33);
    return String.fromCodePoint(lower)
}


console.log(generatePassword(12300))