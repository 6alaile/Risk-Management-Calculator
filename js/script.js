const AccountCurrency = document.getElementById("AccountCurrency");

function setAccountCurrency();


const CurrencyPair = document.getElementById("CurrencyPair");

function selectedCurrency();


const LotSize = document.getElementById("LotSize");


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


var EntryPrice = document.getElementById("EntryPrice");

var BuySellButton = document.getElementsByName("BuySellButton"){
    Buy = document.getElementById("BuyRadioButton"),
    Sell = document.getElementById("SellRadioButton")
}

function ProfitLoss(BuySellButton){
    if(BuySellButton = Buy){
        //BuyRadioButton - Profit: Exit > Entry, Loss: Entry > Exit

        return;
    }else if (BuySellButton = Sell) {
        //SellRadioButton- Profit: Entry > Exit, Loss: Exit > Entry

        return;
    } else {
        return;
    }
};


var TPSL = document.getElementsByName("LimitValue");
var TakeProfit = document.getElementById("TakeProfit");
var StopLoss = document.getElementById("StopLoss");


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
var calculatedProfitLoss = document.getElementsByName("result");
var Profit = document.getElementById("CalculatedProfit");
var Loss = document.getElementById("CalculatedLoss");

