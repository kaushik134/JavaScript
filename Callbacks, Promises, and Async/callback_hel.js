let stocks = {
    fruits : ['apple','banana','orange','graps'],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};
let order = (fruit_name,call_production)=>{
    console.log("ordered placed. please call production")
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} selected...`)
        call_production();
    }, 2000)
};
let production = ()=>{
    setTimeout(()=>{
        console.log("production has started")
        setTimeout(()=>{
            console.log("The fruit has been chopped")
            setTimeout(()=>{
                console.log(`Add ${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
                setTimeout(()=>{
                    console.log("Start Machine")
                    setTimeout(()=>{
                        console.log(`select container ${stocks.holder[1]}`)
                        setTimeout(()=>{
                            console.log(`select toppings ${stocks.toppings[1]}`)
                            setTimeout(()=>{
                                console.log("Ice-Cream serve")
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },1000)
    },0000)
};
order(0,production);