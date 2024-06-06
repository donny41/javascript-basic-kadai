const holydays  = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

console.log("============");
console.log("以下、for利用");
console.log("============");


for (let i = 1; i <= holydays.length; i++){
    console.log(holydays[i-1]);
}

let i = 1;

console.log("============");
console.log("以下、while利用");
console.log("============");

while(i <= holydays.length){
    console.log(holydays[i-1]);
    i++;
}
