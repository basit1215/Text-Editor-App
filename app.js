const input = document.getElementById("textInp")

function bold(){
input.style.fontWeight =input.style.fontWeight  === 'bold' ? 'normal' : 'bold';
}

function italic(){
    input.style.fontStyle=  input.style.fontStyle === 'italic' ? 'normal' : 'italic';
}

function changeFontFamily(){
    const newFont = prompt("Enter font family: ", "Arial" );
    input.style.fontFamily= newFont;
}

function underLine(){
    input.style.textDecoration=   input.style.textDecoration === 'underline' ? 'none' : 'underline';
}

function changeFontSize(){
    const newSize = prompt("Enter font size: " , "16");
    input.style.fontSize= newSize + "px";
}

function changeTextColor(){
    const newColor = prompt("Enter text color");
    input.style.color= newColor;
}