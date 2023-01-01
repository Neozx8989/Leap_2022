const registerNumber = prompt("Please give your register number");
const registerChar = registerNumber.substring(0, 2);
const registerNum = registerNumber.substring(2, 9);

if(registerNumber.length == 10){
    alert("Done ✅")
} else{
    alert("Wrong 🟥!")
}



