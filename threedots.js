const ages = [12, 14, 15, 17];
const ages2 = [43, 53, 654, 7, 5];
const ages3 = [08, 23, 45, 65, 65, 76];
const allAges = ages.concat(ages2).concat(100).concat(ages3);
// console.log(allAges);

const allAges2 = [...ages, ...ages2, 200, ...ages3];
// console.log(allAges2);


const minister = 950;
const shochib = 500;
const driver = 700;
const pion = 435;
// const maximum = Math.max(minister, shochib, driver, pion);

const takaPoisha = [950, 500, 700, 435];
const maximum = Math.max(...takaPoisha);

console.log(maximum);