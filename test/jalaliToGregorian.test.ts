import { shamcToGregorian } from "../src/utils";

test('jalaliToGregorian should return correct gregorian date', () => {
  expect(shamcToGregorian(1398, 10, 11)).toEqual([2020, 1, 1]);
});

test('jalaliToGregorian should return correct gregorian date', () => {
  expect(shamcToGregorian(1398, 10, 12)).toEqual([2020, 1, 2]);
});

test('jalaliToGregorian should return correct gregorian date', () => {
  expect(shamcToGregorian(1398, 11, 12)).toEqual([2020, 2, 1]);
});

test('jalaliToGregorian should return correct gregorian date', () => {
  expect(shamcToGregorian(1398, 12, 29)).toEqual([2020, 3, 19]);
});