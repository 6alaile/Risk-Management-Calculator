var AccountCurrency = document.getElementById("AccountCurrency");
var CurrencyPair = document.getElementById("CurrencyPair");
var AccountBalance = document.getElementById("AccountBalance").value;

// Function to calculate Margin Required to Open a Position

/*
First define the CurrencyPair being traded, this determines the Exchange Rate used.
Next define the LotSize of position and account Leverage; plug into the below formula.

QuoteMargin = Position Size/Account Leverage * Exchange Rate
            = ((LotSize * 100000)/Leverage) * CurrencyPair

As indicated above, the margin will be calculated in the Quote Currency of the pair.
To convert this into the selected AccountCurrency, the QuoteMargin is multiplied by
the exchange rate of the Quote Currency to the AccountCurrency.

AccountMargin = QuoteMargin * Exchange Rate[Quote Currency/Account Currency]
*/


function calculateMargin(){
    var LotSize = document.getElementById("LotSize").value;
    var Leverage = document.getElementById("SelectedLeverage").value;
    
    var QuoteMargin = ((LotSize * 100000) / Leverage) //* CurrencyPair;

    // var AccountMargin = QuoteMargin * ExchangeRate;
    // console.log(AccountMargin);

    document.getElementById("AccountMargin").value = QuoteMargin;
}

//

/*
Finally to determine if the defined account balance can open the position based on the
margin required, compare the AccountBalance to the AccountMargin. The AccountMargin 
textbox should turn red if larger than the account Balance, and green if less than. 

AccountBalance >= AccountMargin {Green}, AccountBalance <= AccountMargin {Red}
*/
/*
function compareAccount(){
    if (AccountMargin >= AccountBalance){
        document.getElementById("AccountMargin").style;
    }else if(AccountMargin <= AccountBalance){
        return Green;
    }
};
*/
// Function to calculate the value of one pip

/**/
function valuePerPip(){
    var OnePip = LotSize/ExchangeRate ;
    
    document.getElementById("PipValue").innerHTML = OnePip;
};

//Function to determine the profit and/or loss of a position

/*
First determine which of the BUY or SELL radio buttons have been selected.
Next determine the values of the EntryPrice, TakeProfit and StopLoss.

If BUY is selected:
Profit = TakeProfit - EntryPrice, Loss = StopLoss - EntryPrice

If SELL is selected:
Profit = EntryPrice - TakeProfit, Loss = EntryPrice - StopLoss

Then onvert the profit/loss into the account currency:
AccountProfit = Profit * QuoteCurrency/AccountCurrency

Finally print the AccountProfit or AccountLoss into the form.
*/
function ProfitLoss(BuySellButton){

    BuySellButton = {
        Buy : document.getElementById("BuyRadioButton").checked,
        Sell : document.getElementById("SellRadioButton").checked
    };

    var EntryPrice = document.getElementById("EntryPrice").value;
    var TakeProfit = document.getElementById("TakeProfit").value;
    var StopLoss = document.getElementById("StopLoss").value; 
    
    var AccountProfit;
    var AccountLoss;
    
    if(BuySellButton.Buy){

        let Profit = (TakeProfit - EntryPrice) * 100000;
        let Loss = (StopLoss - EntryPrice) * 100000;

        //let AccountProfit = Profit * ExchangeRate;
        //let AccountLoss = Loss * ExchangeRate;

        document.getElementById("CalculatedProfit").value = Profit, 
        document.getElementById("CalculatedLoss").value = Loss;
    } 
    else if(BuySellButton.Sell) {

        let Profit = (EntryPrice - TakeProfit) * 100000;
        let Loss = (EntryPrice - StopLoss) * 100000;

        //let AccountProfit = Profit * ExchangeRate;
        //let AccountLoss = Loss * ExchangeRate;

        document.getElementById("CalculatedProfit").value = Profit, 
        document.getElementById("CalculatedLoss").value = Loss;
    } 
    else{
        return null;
    }
};