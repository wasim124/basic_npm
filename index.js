const loadsh =require('lodash');

const moment = require('moment');

// Print Date or Time in the following format:

// February 12th 2021, 12:54:12 pm
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// Friday
console.log(moment().format('dddd'));

// Feb 12th 21
console.log(moment().format('MMM Do YY'));

// Check if the following date is valid or not:

// 2020-01-01
console.log(moment('2020-01-01').isValid()); // true

// 2020-14-01
console.log(moment('2020-14-01').isValid()); // false

// Manipulating Dates

// adds 7 days to current date
console.log(moment().add(7, 'days').format('MMMM Do YYYY'));

// adds 7 months to current date
console.log(moment().add(7, 'months').format('MMMM Do YYYY'));

// adds 7 years to current date
console.log(moment().add(7, 'years').format('MMMM Do YYYY'));

// subtracts 7 days to current date
console.log(moment().subtract(7, 'days').format('MMMM Do YYYY'));

// subtracts 7 months to current date
console.log(moment().subtract(7, 'months').format('MMMM Do YYYY'));

// subtracts 7 years to current date
console.log(moment().subtract(7, 'years').format('MMMM Do YYYY'));



// Find the difference between the following 2 dates:
// 1.
const date1 = moment('2014-11-11');
const date2 = moment('2015-09-11');
console.log(date2.diff(date1, 'days')); // 304

// 2.
const date3 = moment('2014-11-27');
const date4 = moment('2015-09-16');
console.log(date4.diff(date3, 'days')); // 293

// Check if 2020-01-01 date is after 2018-01-01
const date5 = moment('2020-01-01');
const date6 = moment('2018-01-01');
console.log(date5.isAfter(date6)); // true

// Check if 2010-01-01 date is after 2018-01-01
const date7 = moment('2010-01-01');
const date8 = moment('2018-01-01');
console.log(date7.isAfter(date8)); // false

// Check if the year 2019 is a leap year
console.log(moment([2019]).isLeapYear()); // false

// Check if the year 2020 is a leap year
console.log(moment([2020]).isLeapYear()); // true



// Array methods:
console.log(loadsh.chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(loadsh.reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(loadsh.uniq([1, 2, 3, 3, 4, 5, 5])); // [1, 2,

