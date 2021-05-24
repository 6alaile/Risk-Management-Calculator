calculateMargin(){
    let margin;
    let LotSize = document.getElementById("LotSize").innerHTML;
}

changeDirection(){
    let direction = document.getElementById("BuySellButton").innerHTML;
    if (direction == 1){
         //set button Red and text SELL
        return
    } else (direction == 0) {
        //set button Green and text BUY
    }
}

calculateProfitLoss(){
    //when button == BUY; Profit = Exit - Entry, Loss = Entry - Exit
    //when button == SELL; Profit = Entry - Exit, Loss = Exit - Entry
}

