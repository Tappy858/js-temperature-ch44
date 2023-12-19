//console.log("Practice 2");
//prompt("Enter your name");
//let myName=prompt("Enter you name");
//console.log(myName);

//function sum(){
//    let num1=prompt("Enter your name1:");    
//    console.log(num1);
//}
//222sum();

//step 1: create function
//function sum(){
    //let num1=Number(prompt("Enter your name1:"));
   // let num2=Number(prompt("Enter1:"));

    //let total= num1+num2
    //console.log(total);
   // document.write(total);
   // document.getElementById("results").innerHTML=`<p> ${total} </p>`;
//}

//step 2: action jaaaaax
//

function convert(){
let temperature=59
let Fahrenheit=(temperature * 9/5) + 32
document.getElementById("results").innerHTML=`<p> ${Fahrenheit} </p>`;
}

//Converter
function convertTemperature() {
    // Get user input from the form
    const inputTemp= document.getElementById("temperature").value;
    const scale= document.getElementById("scale").value;

    // Perform the temperature conversion
    let result;
    if (scale === "C") {
        result = (inputTemp * 9/5) + 32;
    } else{ (scale === "F") 
        result = (inputTemp - 32) * 5/9;
    }

    // Display the result., toFixed is for decimals and how many
    document.getElementById("result").innerHTML = `Display Results: ${result.toFixed(2)} degrees ${scale === "C" ? "Fahrenheit" : "Celsius"}`;
}