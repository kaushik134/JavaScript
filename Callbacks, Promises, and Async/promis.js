let stocks = {
    fruits: ['apple', 'banana', 'orange', 'graps'],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
let is_shop_open = true;
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time)
        } else {
            reject(console.log("shop closed"))
        }
    })
}
order(2000, () => { console.log(`${stocks.fruits[0]} was selected`) })
    .then(() => {
        order(2000, () => { console.log(`${stocks.liquid[0]} was selected`) })
    })
    .then(() => {
        order(2000, () => { console.log(`${stocks.holder[0]} was selected`) })
    })
