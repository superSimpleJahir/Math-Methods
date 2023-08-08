//  Math.ceil alowes next big value return kore jodi mainus valu deoa hoi ta hole nicher value return korez

let a = Math.ceil(2.01);
document.write(a + '<br>');

a = Math.ceil(-2.99999);
document.write(a);


// Math.floor hochhe lower value return kore Math.ceil ar biporit
let b = Math.floor(2.99999);
console.log(b);
b = Math.floor(-5.111);
console.log(b);

// Math.round amon akti methods jekhane .5 ar upare kono value thakle setake next intager numbere return kore jodi .5 ar niche take tahole dowen intager number return kore.

let c = Math.round(4.4);
console.log(c);
c = Math.round(4.5);
console.log(c);
c = Math.round(-4.4);
console.log(c);
c = Math.round(-4.6);
console.log(c);

// Math.trunc() this is return only intager number

let d = Math.trunc(2.99);
console.log(d);
d = Math.trunc(5.5555);
console.log(d);
d = Math.trunc(-5.5555);
console.log(d);
d = Math.trunc(-3.9999);
console.log(d);


// Math.max ati onek gula number theke max number return kore.
let e = Math.max(20, 30, 40, -500, -333, 444, 35);
console.log(e);

// Math.mon ati onek gula number theke min number return kore.
let f = Math.min(20, 30, 40, -500, -333, 444, 35);
console.log(f);

// Math.sqrt je kono number ar squar rut ber korar jonne ati use kora hoi
let g = Math.sqrt(64);
console.log(g);
g = Math.sqrt(4)
console.log(g);
g = Math.sqrt(9)
console.log(g);
g = Math.sqrt(20)
console.log(g);

// Math.cbrt je kono number ar squar-cube-rut ber korar jonne ati use kora hoi
let h = Math.cbrt(125);
console.log(h)
h = Math.cbrt(200);
console.log(h)

// Math.pow hocche je kono number ar power number ber kora jabe atir maddome akhane first number hocche mas number jemon 4 ar power 3.
let i = Math.pow(4, 3);
console.log(i);
i = Math.pow(4, 5);
console.log(i);

// Math.random hocche computer nije theke je kono akti number rendomli dia dei. akhane sudu 0-1 ar modde number return kore. jodi 1-10 ar modde number return korte chai tahole ((Math.random()* 10) + 1) korte hobe tahole 1-10 ar modde je koono number return korbe jodi dosomik number na chai tahole
let j = Math.random();
console.log(j);

j = Math.trunc((Math.random() * 10) + 1);
console.log(j);

j = Math.floor((Math.random() * 10) + 1);
console.log(j);


// Math.abs ar bitor jodi string number or ja issa ti dite pato tahole ati return korbe absulet value. mainas velu dile ati positiv value dibe 
let k = Math.abs(-5.4);
console.log(k);
k = Math.abs(5 + 4);
console.log(k);
k = Math.abs('jahir');
console.log(k);
k = Math.abs(null);
console.log(k);

// Math.PI ati mathmatic ar Pi ar value
let l = Math.PI;
console.log(l);