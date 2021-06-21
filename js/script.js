// Function to calculate AccountMargin Required to Open a Position

function calculateMargin(){
    // First define the AccountCurrency and CurrencyPair being traded, this determines the Exchange Rates used.
    var AccountCurrency = document.getElementById("AccountCurrency").value;
    var CurrencyPair = document.getElementById("CurrencyPair").value;

    /*
    To determine the CurrencyPair exchange rate, the Base and Quote are split and
    placed into an array. The array indexes are used to calculate the pair exchange rate.
    */
    var Pair = CurrencyPair.split("/");
    var PairRate = fx(1).from(Pair[0]).to(Pair[1]);

    /*
    Next define the LotSize of position and account Leverage; plug into the below formula.      
        QuoteMargin = PositionSize [(LotSize * 100000)/Leverage] * CurrencyPair [BaseCurrency/QuoteCurrency]
    */
    var Leverage = document.getElementById("SelectedLeverage").value;
    var LotSize = document.getElementById("LotSize").value;
    
    var PositionSize = ((LotSize * 100000) / Leverage);
    
    var QuoteMargin = PositionSize * PairRate;
    
    /*
    As indicated above, the margin will be calculated in the Quote Currency of the pair.
    To convert this into the selected AccountCurrency, the QuoteMargin is multiplied by
    the exchange rate of the Quote Currency to the AccountCurrency.

    AccountMargin = QuoteMargin * ExchangeRate[Quote Currency/Account Currency]
    */
    var ExchangeRate = fx(1).from(Pair[1]).to(AccountCurrency);
    
    var AccountMargin = QuoteMargin * ExchangeRate;

    document.getElementById("AccountMargin").value = accounting.toFixed(AccountMargin, 2);
    
    // Function to calculate the value of one pip
    var PipValue = ((LotSize/10000)/ExchangeRate) * 100000;
    
    document.getElementById("PipValue").value = accounting.toFixed(PipValue, 2);
}

// Function to determine if account balance exceedes margin

/*
Finally to determine if the defined account balance can open the position based on the
margin required, compare the AccountBalance to the AccountMargin. The AccountMargin 
textbox should turn red if larger than the account Balance, and green if less than. 

AccountBalance >= AccountMargin {Green}, AccountBalance <= AccountMargin {Red}
*/

function compareAccount(){
    var AccountBalance = document.getElementById("AccountBalance").value;
    var AccountMargin = document.getElementById("AccountMargin").value;

    if (AccountMargin > AccountBalance){
        document.getElementById("AccountMargin").style.border = "2px solid red";
    }else if(AccountMargin <= AccountBalance){
        document.getElementById("AccountMargin").style.border = "2px solid green";
    } else {
        document.getElementById("AccountMargin").style.border = "initial";
    }
};


//Function to determine the profit and/or loss of a position

/*
First determine which of the BUY or SELL radio buttons have been selected.
Next determine the values of the EntryPrice, TakeProfit and StopLoss.

If BUY is selected:
Profit = TakeProfit - EntryPrice; Loss = StopLoss - EntryPrice

If SELL is selected:
Profit = EntryPrice - TakeProfit; Loss = EntryPrice - StopLoss

Then convert the profit/loss into the account currency:
AccountProfit = Profit * ExchangeRate (QuoteCurrency/AccountCurrency)

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
    
    var AccountCurrency = document.getElementById("AccountCurrency").value;
    var CurrencyPair = document.getElementById("CurrencyPair").value;
    var Pair = CurrencyPair.split("/");
    var ExchangeRate = fx(1).from(Pair[1]).to(AccountCurrency);
    
    
    if(BuySellButton.Buy){

        let Profit = (TakeProfit - EntryPrice) * 100000;
        let Loss = (StopLoss - EntryPrice) * 100000;

        //let AccountProfit = Profit * ExchangeRate;
        //let AccountLoss = Loss * ExchangeRate;

        document.getElementById("CalculatedProfit").value =  accounting.toFixed(Profit * ExchangeRate, 2),
        document.getElementById("CalculatedLoss").value = accounting.toFixed(Loss * ExchangeRate, 2);
    } 
    else if(BuySellButton.Sell) {

        let Profit = (EntryPrice - TakeProfit) * 100000;
        let Loss = (EntryPrice - StopLoss) * 100000;

        //let AccountProfit = Profit * ExchangeRate;
        //let AccountLoss = Loss * ExchangeRate;

        document.getElementById("CalculatedProfit").value =  accounting.toFixed(Profit * ExchangeRate, 2),
        document.getElementById("CalculatedLoss").value = accounting.toFixed(Loss * ExchangeRate, 2);
    } 
    else{
        return null;
    }
};