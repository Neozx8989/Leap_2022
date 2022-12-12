console.log("EXERCISES >>>>>>")

console.log(document.getElementById("aimag-101").innerHTML);

console.log(document.getElementById("aimag-522").innerHTML);

console.log(document.getElementById("aimag-315").innerHTML);
document.getElementById("aimag-315").innerHTML = 'Bavaria';

document.getElementById("aimagNames").style = "font-size: 20px; list-style: none; color: white; font-family: arial; text-align: center;"
// document.getElementById("aimag-202").style = "color: yellow; text-shadow: 2px 2px 15px black;"
// document.getElementById("aimag-205").style = "color: aqua; text-shadow: 3px 4px 15px black;"
// document.getElementById("aimag-406").style = "color: black; text-shadow: 3px 4px 15px black; background-color: orange; padding: 20px; border-radius: 10px; box-shadow: 2px 2px 15px black;"

// document.getElementById("aimag-407").style = "color: black; text-shadow: 3px 4px 15px black; background-color: yellow; padding: 20px; border-radius: 10px; box-shadow: inset 2px 2px 15px black;"

for(let i = 0; i < document.getElementsByClassName("khangai").length; i++) {
    document.getElementsByClassName("khangai")[i].style = "font-size: 35px; background-color: green; border-radius: 10px; margin: 5px"
}

for(let i = 0; i < document.getElementsByClassName("baruun-bvs").length; i++) {
    document.getElementsByClassName("baruun-bvs")[i].style = "font-size: 45px; background-color: yellow; border-radius: 10px; margin: 5px; color: black;"
}

for(let i = 0; i < document.getElementsByClassName("gobi").length; i++) {
    document.getElementsByClassName("gobi")[i].style = "font-size: 45px; background-color: orange; border-radius: 10px; margin: 5px; color: black;"
}


// for (let i=0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++) {
//     if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-202")) {
//         document.getElementById("aimagNames").getElementsByTagName("li")[i].style="background-color: red"
//     }
// }

console.log(document.querySelector("#aimagNames"));

console.log(document.querySelector(".khangai"));
console.log(document.getElementsByClassName("khangai"));
console.log(document.querySelectorAll(".khangai"));

document.querySelector("#demo").innerHTML = "Date : " + Date();
document.querySelector("img").src="image/dalai.jpg"


const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("body");
const h1 = document.querySelector("h1");
h1.appendChild(newDiv);


console.log(document.getElementsByTagName("body"));


//DOM EVENT





