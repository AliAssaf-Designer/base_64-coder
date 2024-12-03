let input = document.getElementById("input");
let output = document.getElementById("output");
let select = document.getElementById("select");

input.addEventListener("input",() =>{
    code_decode();
})
select.addEventListener("change",() =>{
    code_decode();
})

function code_decode(){
    if(select.value == "code"){
        output.value = window.btoa(input.value);
    }
    else{
        output.value = window.atob(input.value);
    }
}