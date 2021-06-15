const AccountCurrency = document.getElementById("AccountCurrency");
const CurrencyPair = document.getElementById("CurrencyPair");
const LotSize = document.getElementById("LotSize");

// Function to calculate MarginRequired to Open a Position

/*
First define the AccountCurrency as the margin will be returned in this currency.
Next define the CurrencyPair being traded, this will determine the conversion currency.
Then define the LotSize of position, this will give the amount of margin required.


Margin = Lot Size/Leverage * Exchange rate of QuoteCurerncy

*/

function calculateMargin(LotSize, Leverage){
    var Leverage = document.getElementById("SelectedLeverage").value;
    var MarginRequired = (LotSize * 100000) / Leverage;

    document.getElementById("MarginResult").innerHTML = MarginRequired;
}


function ProfitLoss(BuySellButton){

    BuySellButton = document.getElementsByName("BuySellButton");

    var EntryPrice = document.getElementById("EntryPrice").value;
    var TakeProfit = document.getElementById("TakeProfit").value;
    var StopLoss = document.getElementById("StopLoss").value; 
    
    var Profit;
    var Loss;
    
    if(BuySellButton === Buy){
        //BuyRadioButton (TakeProfit > EntryPrice > StopLoss): Profit = TakeProfit - Entry, Loss = Entry - StopLoss;
        Profit = TakeProfit - EntryPrice;
        Loss = EntryPrice - StopLoss;

        console.log(Profit);

        document.getElementById("CalculatedProfit").innerHTML = Profit, 
        document.getElementById("CalculatedLoss").innerHTML = Loss;
    } 
    else if (BuySellButton === Sell) {
        //SellRadioButton (StopLoss > EntryPrice > TakeProfit): Profit = Entry - TakeProfit, Loss = StopLoss - Entry;
        Profit = EntryPrice - TakeProfit;
        Loss = StopLoss - EntryPrice;

        document.getElementById("CalculatedProfit").innerHTML = Profit, 
        document.getElementById("CalculatedLoss").innerHTML = Loss;
    } 
    else {

        return Profit, Loss;
    }
};

