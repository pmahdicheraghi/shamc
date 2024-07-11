import ShamcDate from "../src/index";

test('ShamcDate should return correct month name', () => {
  const date = new ShamcDate('2020/01/01');
  expect(date.getShamcMonthName()).toBe("دی");
});

test('ShamcDate should return correct month', () => {
  const date = new ShamcDate('2020/01/01');
  expect(date.getShamcMonth()).toBe(9);
});

test('ShamcDate should return correct day name', () => {
  const date = new ShamcDate('2020/01/01');
  expect(date.getShamcDayName()).toBe("چهارشنبه");
});

test('ShamcDate should return correct day', () => {
  const date = new ShamcDate('2020/01/01');
  expect(date.getShamcDay()).toBe(4);
});

test('ShamcDate should return correct year', () => {
  const date = new ShamcDate('2020/01/01');
  expect(date.getShamcYear()).toBe(1398);
});

test('ShamcDate should return correct date', () => {
  const date = new ShamcDate('2020/01/01');
  expect(date.getShamcDate()).toBe(11);
});

test('ShamcDate from jalali should return correct gregorian date', () => {
  const date = ShamcDate.fromShamc("1398/10/11");
  expect(date.toShamcString('-')).toBe("1398-10-11");
})