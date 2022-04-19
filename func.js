function reverseString1(str) {
    let arr = str.split("");
    return arr.reverse().join("");
}

function reverseString2(str) {
    let out = "";
    for (let i = str.length - 1; i >= 0; i-- ) {
        out += str[i];
    }
    return out;
}

function reverseString3(str) {
    let out = "";
    for (let i = 0; i < str.length; i++ ) {
        out += str[str.length-i-1];
    }
    return out;
}

function reverseString4(str) {
    if (str.length < 2) {
        return str[0];
    }
    return reverseString2(str.substr(1)) + str[0];
}

function reverseString5(str) {
    let arr = str.split("");
    return arr.sort(()=> -1).join("");
}

function reverseString6(str) {
    return str.split("").reduce((str, chr) => chr + str);
}

function reverseString7(str) {
    let out = str.charAt(str.length-1);
    for (let i=0; i<str.length; i++) {
        out += str.split("").slice(-1-i, -i);
    }
    return out;
}

function reverseString8(str) {
    let out = str.charAt(str.length-1);
    for (let i=str.length; i>0; i--) {
        out += str.split("").slice(i-str.length-1, -str.length+i);
    }
    return out;
}

function reverseString9(str) {
    let arr = str.split("").reverse();
    let out = "";
    arr.forEach(element => {
        out += element;
    });
    return out;
}

function reverseString10(str) {
    return str.split("").reduce((out, chr)=> chr + out);
}

function reverseString11(str) {
    let iterator = str.split("").reverse().entries();
    let out = "";
    for (let _=0; _<str.length; _++) {
        out += iterator.next().value[1];
    }
    return out;
}

const reverseString12 = function(str) {
    let iterator = str.split("").reverse().entries();
    let out = "";
    for (let _=str.length; _>0; _--) {
        out += iterator.next().value[1];
    }
    return out;
}

const reverseString13 = str => {
    let arr = str.split("").reverse();
    let out = "";
    for (let el of arr) {
        out += el;
    }
    return out;
}

const reverseString14 = str=> {
    let out = str.charAt(str.length-1);
    for (let i=0; i<str.length; i++) {
        out += str.slice(-1-i, -i);
    }
    return out;
}

const reverseString15 = function(str) {
    let out = str.charAt(str.length-1);
    for (let i=str.length; i>0; i--) {
        out += str.slice(i-str.length-1, -str.length+i);
    }
    return out;
}

console.log(reverseString1("hello1"));
console.log(reverseString2("hello2"));
console.log(reverseString3("hello3"));
console.log(reverseString4("hello4"));
console.log(reverseString5("hello5"));
console.log(reverseString6("hello6"));
console.log(reverseString7("hello7"));
console.log(reverseString8("hello8"));
console.log(reverseString9("hello9"));
console.log(reverseString10("hello10"));
console.log(reverseString11("hello11"));
console.log(reverseString12("hello12"));
console.log(reverseString13("hello13"));
console.log(reverseString14("hello14"));
console.log(reverseString15("hello15"));
