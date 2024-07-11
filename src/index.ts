import { shamcToGregorian } from "./utils";

export default class ShamcDate extends Date {
  static fromShamc = (shamc: string) => {
    const [year, month, day] = shamc.split("/").map(Number);
    const gregorian = shamcToGregorian(year, month, day);
    return new ShamcDate(`${gregorian[0]}/${gregorian[1]}/${gregorian[2]}`);
  }

  getShamcDay = () => super.getDay() === 6 ? 0 : super.getDay() + 1                                                    // 4
  getShamcDate = () => Number(super.toLocaleDateString('fa-IR-u-nu-latn').split("/")[2]);                              // 11
  getShamcMonth = () => Number(super.toLocaleDateString('fa-IR-u-nu-latn').split("/")[1]) - 1;                         // 9
  getShamcYear = () => Number(super.toLocaleDateString('fa-IR-u-nu-latn').split("/")[0]);                              // 1398
  getShamcMonthName = () => super.toLocaleDateString("fa-IR", { month: 'long' });                                      // دی
  getShamcDayName = () => super.toLocaleDateString("fa-IR", { weekday: 'long' });                                      // چهارشنبه
  toShamcString = (delimiter: string = "/") => super.toLocaleDateString('fa-IR-u-nu-latn').split("/").join(delimiter); // 1398/10/11
}