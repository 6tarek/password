import {  navbarcolor , navbarcolordark , navbarcolordarkwhite , navbarcolorinput , navbarcolorrandom , navbarcolorwhite , navbarclose , navbaropend , passwordcreatebutton , passwordcreateinput , passwordhidebutton , passwordshowbutton , passwordshowcopy , passwordshowinput, navbaropen }from "./variables.js";
export{ creates , copy , randoms , navbar1 , navbar2 , hide , show }
 function creates(){
  if(passwordcreateinput.value > 23 || passwordcreateinput.value == 0 || passwordcreateinput.value == '' ){ 
    alert("pls enter yoer number > 23"); 
  passwordcreateinput.value = ''
  return
}else{  
    let pass =
    "1234567980qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM?@#!~$&";
  let ran = "";
  for (let i = 0; i < passwordcreateinput.value; i++){ran += pass[Math.floor(Math.random() * pass.length)];}
  passwordshowinput.value = ran;
  passwordcreateinput.value = "";
}
}
 function copy() {
    // Get the text field
    var copyText = passwordshowinput
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
     navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
 function randoms(){
  let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ,"a", "b", "c", "d", "e", "f"];
  let colorParts = [];
  for (let i = 0; i < 6; i++) {
    colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
  }
  let finalColor = `#${colorParts.join("")}`;
  document.body.style.backgroundColor = finalColor;
}
function navbar1(){
    navbaropend.classList.remove('remove')
    navbaropen.classList.add('remove')
}
function navbar2(){
    navbaropend.classList.add('remove')
    navbaropen.classList.remove('remove')
}
function hide(){
    passwordshowinput.type = 'password'
    passwordshowbutton.classList.remove('remove')
    passwordhidebutton.classList.add('remove')
}
function show(){
    passwordshowinput.type = 'text'
    passwordshowbutton.classList.add('remove')
    passwordhidebutton.classList.remove('remove')
}