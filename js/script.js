const BaseCurrency = document.getElementById("AccountCurrency");
const CurrencyPair = document.getElementById("CurrencyPair");
const LotSize = document.getElementById("LotSize");

function calculateMargin(){
    /* 
    Margin = (LotSize*100000)/Leverage * Exchange Rate
    Exchange Rate = Account currency vs Quote Currency (import via api)
    */
    Leverage = document.getElementById("SelectedLeverage"); 
    Margin = (LotSize * 100000) / Leverage;

    document.getElementById("MarginResult").innerHTML = Margin;
}

function changeDirection(){
    direction = document.getElementById("BuySellButton")s;
    if (direction == 1){
         //set button Red and text SELL
        return
    } else (direction == 0) {
        //set button Green and text BUY
    }
}

function calculateProfitLoss(){
    //when button == BUY; Profit = Exit - Entry, Loss = Entry - Exit
    //when button == SELL; Profit = Entry - Exit, Loss = Exit - Entry
}

