let btns =
document.querySelectorAll(".num-button");
let allBtns =
document.querySelectorAll(".button");
let resultBox =
document.querySelector("#result-box");
let clearBtn =
document.querySelector('#clear');
let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];



btnSpread.forEach((button, i)=> {
    button.addEventListener("click", () => {

        if (resultBox.innerHTML == "0") {
            resultBox.innerHTML = "";
        }
        let value = btns[i].innerHTML;
        resultBox.innerHTML += value;
    });
});

// return 
function evaluate(fn) {
    return new Function('return ' + fn)();
    
}



// = 
console.log(evaluate)
total.addEventListener('click', ()=> {
    let allInput = resultBox.innerHTML;

    resultBox.innerHTML = evaluate(allInput);
    console.log(evaluate(allInput));
})

// AC 
clearBtn.addEventListener('click', ()=> {
    resultBox.innerHTML = "0";
})