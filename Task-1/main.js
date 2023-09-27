var button_len=document.querySelectorAll(".btn").length;
var input=document.getElementById("text");
var calu_icon=document.querySelector(".calculator-img");


calu_icon.addEventListener("click",function(){
    document.querySelector(".home-page").classList.add("invis");
    document.getElementById("calculator-section").classList.remove("invis");
    document.getElementById("main").classList.remove("main");
    document.querySelector(".class-main").classList.remove("inside-main");
});

for(var i=0;i<button_len;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var pressed=this.innerHTML;
        switch(pressed){
            case "AC":
                input.value="";
                break;
            case "⌫":
                input.value=input.value.toString().slice(0,-1);
                break;
            case "=":
                input.value=eval(input.value);
                break;
            case "x":
                input.value=input.value+"*";
                break;           
            default:
                input.value=input.value+pressed;
                break;
        }
});
}

document.addEventListener("keypress",function(event){
    console.log(event.key);
    switch(event.key){
        case "0":  input.value=input.value+event.key;  break;
        case "1":  input.value=input.value+event.key;  break;
        case "2":  input.value=input.value+event.key;  break; 
        case "3":  input.value=input.value+event.key;  break;  
        case "4":  input.value=input.value+event.key;  break;
        case "5":  input.value=input.value+event.key;  break;
        case "6":  input.value=input.value+event.key;  break;
        case "7":  input.value=input.value+event.key;  break;
        case "8":  input.value=input.value+event.key;  break;
        case "9":  input.value=input.value+event.key;  break;
        case "%":  input.value=input.value+event.key;  break;
        case "+":  input.value=input.value+event.key;  break;
        case "-":  input.value=input.value+event.key;  break;
        case "*":  input.value=input.value+event.key;  break;
        case "/":  input.value=input.value+event.key;  break;
        case "=":  input.value=eval(input.value);  break;
        case "Enter":  input.value=eval(input.value);  break;
    }
});