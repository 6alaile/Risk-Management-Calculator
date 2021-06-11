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
    var Leverage = document.getElementById("SelectedLeverage");
    var Margin = (LotSize * 100000) / Leverage;
    return Margin;

    document.getElementById("MarginResult").innerHTML = Margin;
}


// var TPSL = document.getElementsByName("LimitValue");

/*
var calculatedProfitLoss = document.getElementsByName("result");

var Profit = document.getElementById("CalculatedProfit"); 
var Loss = document.getElementById("CalculatedLoss");       
*/


function ProfitLoss(BuySellButton){
    var EntryPrice = document.getElementById("EntryPrice");

    var BuySellButton = {                                       //document.getElementsByName("BuySellButton")
        Buy = document.getElementById("BuyRadioButton"),
        Sell = document.getElementById("SellRadioButton")
    }

    var TakeProfit = document.getElementById("TakeProfit");     // var TPSL = document.getElementsByName("LimitValue");
    var StopLoss = document.getElementById("StopLoss"); 
    
    var Profit;
    var Loss;
    
    if(BuySellButton == Buy){
        //BuyRadioButton (TakeProfit > EntryPrice > StopLoss): Profit = TakeProfit - Entry, Loss = Entry - StopLoss;
        Profit = TakeProfit - EntryPrice;
        Loss = EntryPrice - StopLoss;

        document.getElementById("CalculatedProfit").innerHTML = Profit, 
        document.getElementById("CalculatedLoss").innerHTML = Loss;
    } 
    else if (Sell) {
        //SellRadioButton (StopLoss > EntryPrice > TakeProfit): Profit = Entry - TakeProfit, Loss = StopLoss - Entry;
        Profit = EntryPrice - TakeProfit;
        Loss = StopLoss - EntryPrice;
        return Profit, Loss;
    } 
    else {

        return Profit, Loss;
    }
    // document.getElementById("CalculatedProfit").innerHTML = Profit;
    // document.getElementById("CalculatedLoss").innerHTML = Loss;
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