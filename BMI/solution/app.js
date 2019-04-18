function calcBMI(){
    //BMI Formula: BMI = kg/m^2
    //x = kg
    let x = document.getElementById('body').value;
    //1 meter = 100 centimeter: z = centimeter/100
    let z = document.getElementById('index').value;
    z = z/100
    let result =  x/(z*z);
    result = parseFloat(result.toFixed(2));
    return document.getElementById('answer').innerHTML = `Your BMI is ${result} <br /> 
    ${checkResult(result)}`; 
}

function checkResult(result){
    let text = "";
    if (result <= 18.5) {
        text = "You are underweight.";
    } else if(result >= 18.5 && result <= 24.9){
        text = "You are normal weight.";
    } else if(result >= 25 && result <= 29.9){
        text = "You are overweight.";
    }else {
        text = "You are obese.";
    }
    return text;
}