calculateMargin(){
    let margin;
    let LotSize = document.getElementById("LotSize").innerHTML;
}

changeDirection(){
    let direction = document.getElementById("BuySellButton").innerHTML;
    if (direction){
        direction == 1; //Value == 1 is SELL, set button Red
        return
    } else {
        //Value == 0 is BUY, set button Green
    }
}

calculateProfitLoss(){
    //when button == BUY; Profit = Exit - Entry, Loss = Entry - Exit
    //when button == SELL; Profit = Entry - Exit, Loss = Exit - Entry
}

