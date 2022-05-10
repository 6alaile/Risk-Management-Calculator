# Forex Risk Management Calculator

[![GitHub license](https://img.shields.io/github/license/wilby-mj/Forex-Calculator)](https://github.com/wilby-mj/Forex-Calculator/blob/master/LICENSE)   [![GitHub stars](https://img.shields.io/github/stars/wilby-mj/Forex-Calculator)](https://github.com/wilby-mj/Forex-Calculator/stargazers)   [![Twitter](https://img.shields.io/twitter/url?label=Tell%20a%20Friend&logo=Twitter&url=https%3A%2F%2Fgithub.com%2Fwilby-mj%2FForex-Calculator)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fwilby-mj%2FForex-Calculator)

The calculator is a trading tool that helps the user to determine if they can place a trade in the forex market. This is done by calculating the margin (deposit) required to open the position of a selected currency pair based on the lot size selected and account leverage. Additionally they have the ability to determine the amount of profit or loss incurred before opening a position.

<img src="other files/risk-management-calculator.png">

## How to use the Calculator

### Margin
The user selects the account currency, currency pair being traded and leverage on the account, then enters the lot size (volume) of the trade and account balance. This will display a margin value in the margin box. The box will light up red if a position cannot be opened and green if a position can be opened.
Changing these values will also change the margin value.

### Profit/Loss
The user selects either BUY or SELL to determine trade direction, then inputs the entry level, take profit and stop loss values which will give the profit and loss amount in the boxes below.


Disclaimer: These calculations may vary from real world performance as broker fees (i.e. spread, swap and comission) are not factored into the calculation.

This tool is built using Bootstrap and JavaScript. Hosted at Netlify.
