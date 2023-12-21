// if statements
//let yourName="darius"

//if(confirm("Are you "+ yourName + "?")){
//	console.log("Hello " + yourName);
//}else{
//	console.log("Then what is your name?");
//}

//== //compares same content
//=== //compares same type and content

//console.log(1 == 1); // true
//console.log(5 == 8); //false

//console.log("1" == 1); // true
//console.log("1" === 1); //false, console.log("1" === "5"); //false

//let num1 = 1;
//let num2 = 2;

//if(num1 < num2){
//	console.log("num1 is smaller than num2");
//}else {
//    console.log("num2 is smaller than num1");
//}

function login(){
    console.log("Hello");
//create the database variables for password and email
    let userDB="darius@gmail.com";
    let passDB="test1234";

    //get values from the user
   // let user= prompt("Enter username: ");
    //let password= prompt("Enter password: ");
    //console.log(user,password);

    let user= document.getElementById("txtUserName").value;
    let password= document.getElementById("txtPassword").value;
    console.log(user,password);

    //compare the DB values and the user values
    if(user===userDB && password===passDB){
    
        //display welcome message
    document.getElementById("notifications").innerHTML='Welcome in ${user}';
    }else{
    document.getElementById("notifications").innerHTML='invald credentials';
        //display invald credentials
    }
}


//students list
function register(){
    let student = document.getElementById("txtStudent").value;
    // Display the result
    document.getElementById("studentsList").innerHTML+=`<li>${student}</li>`;
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

