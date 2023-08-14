function Check(){
    let value = document.getElementById('input').value
    let ans = value;
    let operator = ans.substr(1,1)
    let num1 = Number(ans.substr(0,1))
    let num2 = Number(ans.substr(2,1))
    let replay = 0;
   
    switch (operator){
        case "+" :
        replay = num1 + num2
        break;
        case "-" :
        replay = num1 - num2
        break;
        case "*" :
         replay = num1 * num2
        break;
        case "/" :
        replay = num1 / num2
        break;
        
    }
    
   document.getElementById('result').innerHTML = "Answer : " + replay;
}
