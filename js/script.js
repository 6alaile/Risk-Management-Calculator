BaseCurrency = document.getElementById("AccountCurrency");
CurrencyPair = document.getElementById("CurrencyPair");
LotSize = document.getElementById("LotSize");

function calculateMargin(LotSize, Leverage){
    /* 
    Margin = (LotSize*100000)/Leverage * Exchange Rate
    Exchange Rate = Account currency vs Quote Currency (import via api)
    */
    Leverage = document.getElementById("SelectedLeverage");
    Margin = (LotSize * 100000) / Leverage;
    return Margin;
}
document.getElementById("MarginResult").innerHTML = calculateMargin(LotSize, Leverage);


EntryPrice = document.getElementById("EntryPrice");
TakeProfit = document.getElementById("TakeProfit");
StopLoss = document.getElementById("StopLoss");

function calculateBuy(BuyRadioButton){
    
    if (TakeProfit > EntryPrice > StopLoss) {
        Profit = TakeProfit - EntryPrice;
        Loss = EntryPrice - StopLoss;
    } else {
        
    }
    //BuyRadioButton: Profit = Exit > Entry, Loss = Entry > Exit
    //SellRadioButton: Profit = Entry > Exit, Loss = Exit > Entry
}

function calculateSell(SellRadioButton){
    Profit = EntryPrice - TakeProfit
    Loss = StopLoss - EntryPrice
}

