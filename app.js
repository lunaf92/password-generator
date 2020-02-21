/**
 * create a random uppercase character 
 */
function upChar() {
    let x = String.fromCharCode(Math.floor(Math.random() * 26 + 65))
    return x
}

/**
 * create a random lowercase character 
 */
function lowChar() {
    let x = String.fromCharCode(Math.floor(Math.random() * 26 + 97))
    return x
}

/**
 * create a random special character 
 */
function specialChar() {
    let x = String.fromCharCode(Math.floor(Math.random() * 9 + 35))
    return x
}

/**
 * create a random number character 
 */
function numChar() {
    let x = String.fromCharCode(Math.floor(Math.random() * 10 + 48))
    return x
}

/**
 * generate password given the length of the desired password and the size of the object
 * where the characters are stored
 * @param len the length of the desired password
 * @param size the size of the object 
 * @returns the desired password 
 */
function generatePw(len, size) {
    let pass = ""
    let str = {}
    if (size < 1) {
        return pass
    }
    for (let i = 0; i < len; i++) {
        x = Math.floor(Math.random() * size)
        str = createObj();
        pass += str.key(x);
    }
    return pass
}

/**
 * checks which checkboxes are checked and create an object with one of each
 * adds a function at the end of the object to retrieve the key from an integer as in an array
 */
function createObj() {
    let upper = document.getElementById("upperCase")
    let lower = document.getElementById("lowerCase")
    let number = document.getElementById("number")
    let char = document.getElementById("specialChar")
    let arr = {}

    if (upper.checked) {
        arr.up = upChar()
    }
    if (lower.checked) {
        arr.low = lowChar()
    }
    if (number.checked) {
        arr.num = numChar()
    }
    if (char.checked) {
        arr.char = specialChar()
    }

    // add to the object a function to find the key from an integer

    arr.key = function (n) {
        return this[Object.keys(this)[n]];
    }

    return arr
}

/**
 * triggers the password generator on click of the button
 */
function listen() {
    const button = document.getElementById("generate_pw")
    const pwField = document.getElementById("pw_output")
    
    button.addEventListener("click", function () {
        let len = document.getElementById("length").value
        let arr = createObj()
        let size = Object.keys(arr).length - 1
        pwField.value = generatePw(len, size)
    });

}

listen()
