

function AppCodeCopy(text){
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

const button = document.querySelector("#app_copy-button");
const text = document.querySelector("#app_code_copy").innerText;
button.addEventListener("click", function(){
    AppCodeCopy(text)
})