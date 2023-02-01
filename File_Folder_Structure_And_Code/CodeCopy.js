

function CodeCopy(text){
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

const button = document.querySelector("#code_copy_button");
const text = document.querySelector("#code_copy").innerText;
button.addEventListener("click", function(){
    CodeCopy(text)
})
