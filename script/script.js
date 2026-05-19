const a = 13;
const b = 22;
const c = 2;
const d = 42;
const e = 21;
const f = true;
const g = 26;
const h = 3.14;
const i = '42';
const k = 'Six';
const name1 = 'Riri';
const name2 = 'Fifi';
const name3 = 'Zaza';
const name4 = 'Loulou';

// Trouvez les resultats pour :
//  1 false
const result1 = a > b;
console.log('Exo 1 :', result1); 

//  2 true
const result2 = (a + c) < b;
console.log('Exo 2 :', result2); 

//  3 false
const result3 = !(b > e);
console.log('Exo 3 :', result3); 

//  4 false
const result4 = c > (b + e);
console.log('Exo 4 :', result4); 

//  5 true
const result5 = (a * 2) >= g;
console.log('Exo 5 :', result5); 

//  6 true
const result6 = d === (e * 2);
console.log('Exo 6 :', result6); 

//  7 true
const result7 = (a + b) !== (c + e);
console.log('Exo 7 :', result7); 

//  8 false
const result8 = (name1 < name2) && (name3 > name4);
console.log('Exo 8 :', result8); // false

//  9 true
const result9 = ((a + c) > b) || f;
console.log('Exo 9 :', result9); // true

// 10 false
const result10 = ((a * 2) <= b) && ((d - e) >= (b - c)) && f;
console.log('Exo 10 :', result10); // false

//  11 false
const result11 = (a > c) && !(e > g) && (a % 2 === 0) && !f;
console.log('Exo 11 :', result11); // false

//  12 false
const result12 = ((d === (e * 2)) || (e > g)) && (d === i);
console.log('Exo 12 :', result12); // false

//  13 true
const result13 = ((a * 2) > (g / 2)) || f || ((g + b + c) > (d * h));
console.log('Exo 13 :', result13); 

//  14 false
const result14 = k > 5;
console.log('Exo 14 :', result14); 