const AccountCurrency = document.getElementById("AccountCurrency");
function setAccountCurrency();

const CurrencyPair = document.getElementById("CurrencyPair");
function selectedCurrency();

const LotSize = document.getElementById("LotSize");

/*
calculate margin required to open position

function calculateMargin(){
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
var BuySellButton = {                                       //document.getElementsByName("BuySellButton")
        Buy = document.getElementById("BuyRadioButton"),
        Sell = document.getElementById("SellRadioButton")
    }

var TakeProfit = document.getElementById("TakeProfit");     // var TPSL = document.getElementsByName("LimitValue");
var StopLoss = document.getElementById("StopLoss");         // var TPSL = document.getElementsByName("LimitValue");

var Profit = document.getElementById("CalculatedProfit");   // var calculatedProfitLoss = document.getElementsByName("result");
var Loss = document.getElementById("CalculatedLoss");       // var calculatedProfitLoss = document.getElementsByName("result");

function ProfitLoss(BuySellButton){
    if(BuySellButton = Buy){
        //BuyRadioButton (TakeProfit > EntryPrice > StopLoss): Profit = TakeProfit - Entry, Loss = Entry - TakeProfit;
        Profit = TakeProfit - EntryPrice;
        Loss = EntryPrice - TakeProfit; 
        return;
    } 
    else if (BuySellButton = Sell) {
        //SellRadioButton (StopLoss > EntryPrice > TakeProfit): Profit = Entry - TakeProfit, Loss = TakeProfit - Entry;

        return;
    } 
    else {

        return;
    }
};


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