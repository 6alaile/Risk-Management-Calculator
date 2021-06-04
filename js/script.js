BaseCurrency = document.getElementById("AccountCurrency");
CurrencyPair = document.getElementById("CurrencyPair");
LotSize = document.getElementById("LotSize");

/*

function to calculate margin required to open position(){
    Exchange Rate = Account currency vs Quote Currency (import via api)
    Margin = ((LotSize*100000)/Leverage) * Exchange Rate
}
*/

function calculateMargin(LotSize, Leverage){

    Leverage = document.getElementById("SelectedLeverage");
    Margin = (LotSize * 100000) / Leverage;
    return Margin;
}
document.getElementById("MarginResult").innerHTML = calculateMargin(LotSize, Leverage);


EntryPrice = document.getElementById("EntryPrice");
TakeProfit = document.getElementById("TakeProfit");
StopLoss = document.getElementById("StopLoss");

/* 

function calculateProfitLoss(EntryPrice, TakeProfit, StopLoss){
    while (button selected = buyradiobutton){
        Profit = TakeProfit - EntryPrice;
        Loss = EntryPrice - StopLoss;
    }
    while (button selected = sellradiobutton){
        Profit = EntryPrice - TakeProfit;
        Loss = StopLoss - EntryPrice;
    }

    return ;

    write result into CalculatedProfit & CalcuatedLoss (disabled input fields)
}

*/

function calculateBuy(BuyRadioButton){
    
    if (TakeProfit > EntryPrice > StopLoss) {
        
    } else {
        
    }
    //BuyRadioButton - Profit: Exit > Entry, Loss: Entry > Exit
    //SellRadioButton- Profit: Entry > Exit, Loss: Exit > Entry
}

function calculateSell(SellRadioButton){
    
}

