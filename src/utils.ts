export const shamcToGregorian = (jy: number, jm: number, jd: number) => {
  let gy = jy + 621;
  let gm = jm;
  let gd = jd;

  const date = new Date(gy, gm, gd);
  while (true) {
    const [y, m, d] = date.toLocaleDateString('fa-IR-u-nu-latn').split("/").map(Number);
    if (y === jy && m === jm && d === jd) break;
    date.setFullYear(date.getFullYear() + (jy - y), date.getMonth() + (jm - m), date.getDate() + (jd - d));
  }
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
}