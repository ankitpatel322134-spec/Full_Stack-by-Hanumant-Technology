const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".deopdown select");
const btn = document.getElementsByTagName("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name == "from" && currCode=="USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);

    });
}
const updateFlag = (element => {
    let currCode = element.value;
    let countryCode = countryCode[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
});

btn.addEventListener ("click",(evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".input");
    let amtVal = amount.value;
    if (amtVal ==="" || amtVal < 1) {
        amtVal = 1;
        amount.value="1";
    }
    console.log()
    const URL = ` ${BASE_URL}/${fromCurr}/${toCurr}.json`;
});