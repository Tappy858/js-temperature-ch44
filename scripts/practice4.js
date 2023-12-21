const listNumbersContainer = document.getElementById("list-numbers");

for(let i=1; i<11; i++){
    listNumbersContainer.innerHTML +=`<li> ${i} </li>`

}

const listNumbersReverseContainer = document.getElementById("list-numbers-reverse");

for (let i=10; i>=1; i--){
    listNumbersReverseContainer.innerHTML +=`<li> ${i} </li>`
}


const listNumbersEvenContainer = document.getElementById("list-numbers-even");

for (let i=2; i<11; i+=2){
    listNumbersEvenContainer.innerHTML +=`<li> ${i} </li>`
}

const listNumbersOddContainer = document.getElementById("list-numbers-odd");

for (let i=1; i<=10; i+=2){
    listNumbersOddContainer.innerHTML +=`<li> ${i} </li>`
}

const listMultiCont=document.getElementById("multiplicationTable");

for (let i=1; i<100; i++){
    result = 5*i;
    listMultiCont.innerHTML +=`<li>5 x ${i} = ${result}</li>`
}


