import { shamcToGregorian } from "../src/index";

test('shamcToGregorian should return correct gregorian date', () => {
  expect(shamcToGregorian(1398, 10, 11)).toEqual([2020, 1, 1]);
});

test('shamcToGregorian invalid range should throw exception', () => {
  expect(() => shamcToGregorian(1398, 12, 31)).toThrow(RangeError);
});