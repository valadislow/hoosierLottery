function getSixNumbers() {
    for (let i = 0; i < 6; i++){
        number = lotteryNumber()
        console.log(number);

    }
}

function lotteryNumber() {
    return(1 + Math.floor(Math.random() * 49))
}


getSixNumbers()
