# Kelly Criterion Bet Sizing Calculator

## Overview

This application is designed to help users calculate the optimal bet size using the Kelly Criterion, a popular formula used in gambling and investing to determine the ideal amount to bet to maximize wealth growth over time. The app takes into account the user's bankroll, the probability of winning a bet, and the American odds to calculate the optimal bet size.

## Features

- **Input Validation**: Checks for valid input ranges and provides feedback for invalid entries.
- **American Odds Conversion**: Converts American odds to European decimal odds for calculation.
- **Optimal Bet Calculation**: Uses the Kelly Criterion to calculate the optimal bet size.
- **Error Handling**: Includes server-side and client-side error handling to manage negative and impossible bet scenarios.

## How to Use

1. **Enter Probability of Winning**: Input the probability of winning the bet (a value between 0 and 1).
2. **Enter American Odds**: Input the American odds for the bet.
3. **Enter Bankroll**: Input your total bankroll amount.
4. **Calculate**: Click the 'Calculate' button to get the optimal bet size.
5. **Results**: The optimal bet size will be displayed. If the bet is not advisable, the calculator will indicate so.

## Installation

To set up this application:

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies (if any).
3. Run the server (typically via `node server.js` or similar command).
4. Open the `index.html` file in a web browser to use the calculator.

## Contributing

Contributions to improve the calculator are welcome. Please ensure to follow the project's code style and add tests for new features.

## License

[MIT License](LICENSE)

## Disclaimer

This calculator is provided for informational purposes only and should not be considered as financial advice.

