let number = 999;
let s = 0
let sum = (work) => {
    return new Promise((resolve, reject) => {
        if (number > 9) {
            resolve(work())
        } else {
            reject(console.log(number))
        }
    })
}
sum(() => { Arr = Array.from(String(number), Number) })
    .then(() => {
        s = 0;
        Arr.forEach(x => {
            s += x;
        })
        console.log(s)
        if (s <= 9) {
            return s;
        } else {
            
        }
    })