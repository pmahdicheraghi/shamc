import ShamcDate from 'shamc';

const date = new ShamcDate('2020/01/01');
console.log(date.getShamcMonthName());    // "دی"
console.log(date.getShamcMonth());        // 9
console.log(date.getShamcDayName());      // "چهارشنبه"
console.log(date.getShamcDay());          // 4
console.log(date.getShamcYear());         // 1398
console.log(date.getShamcDate());         // 11
console.log(date.toShamcString());        // "1398/10/11"

const date2 = ShamcDate.fromShamc('1398/10/11');
console.log(date2.getShamcMonthName());    // "دی"
console.log(date2.getShamcMonth());        // 9
console.log(date2.getShamcDayName());      // "چهارشنبه"
console.log(date2.getShamcDay());          // 4
console.log(date2.getShamcYear());         // 1398
console.log(date2.getShamcDate());         // 11
console.log(date2.toShamcString());        // "1398/10/11"