const phoneNum = prompt("Please give your phone number :");
const countryNum = phoneNum.substring(0, 4);
const fullNum = phoneNum.substring(4, 12);

if(countryNum == '+976' && countryNum.length == 4 && Number.isInteger(Number(fullNum)) && phoneNum.length == 12){
    alert("Tani orulsan Utasni dugaad zuw baina :D 🟢");
} else{
    alert("Tani orulsan Utasni dugaad Buruu baina 🔴 !!!");
}