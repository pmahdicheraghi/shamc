# ShamcDate

The ShamcDate package is a lightweight JavaScript library for working with dates and times. It provides a simple and intuitive API for performing common date and time operations.

## Features

- Parsing and formatting dates and times
- Manipulating dates and times (adding/subtracting days, months, years, etc.)
- Comparing dates and times
- Calculating the difference between two dates or times
- Working with time zones

## Installation

You can install the ShamcDate package via npm:

```bash
npm install shamc
```

## Usage

To use the ShamcDate package in your JavaScript project, you can import it as follows:

```javascript
import ShamcDate from 'shamc';
```

Once imported, you can create a new ShamcDate object and start using its methods:

```javascript
const date = new ShamcDate('2020/01/01');
console.log(date.getShamcMonthName());    // "دی"
console.log(date.getShamcMonth());        // 9
console.log(date.getShamcDayName());      // "چهارشنبه"
console.log(date.getShamcDay());          // 4
console.log(date.getShamcYear());         // 1398
console.log(date.getShamcDate());         // 11
console.log(date.toShamcString());        // "1398/10/11"
```

Or you can create a date from Jalali date string:

```javascript
const date2 = ShamcDate.fromJalali('1398/10/11');
console.log(date2.getShamcMonthName());    // "دی"
console.log(date2.getShamcMonth());        // 9
console.log(date2.getShamcDayName());      // "چهارشنبه"
console.log(date2.getShamcDay());          // 4
console.log(date2.getShamcYear());         // 1398
console.log(date2.getShamcDate());         // 11
console.log(date2.toShamcString());        // "1398/10/11"
```

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the [GitHub repository](https://github.com/pmahdicheraghi/shamc).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/pmahdicheraghi/shamc/LICENSE) file for more information.
