import {  navbarcolor , navbarcolordark , navbarcolordarkwhite , navbarcolorinput , navbarcolorrandom , navbarcolorwhite , navbarclose , navbaropend , passwordcreatebutton , passwordcreateinput , passwordhidebutton , passwordshowbutton , passwordshowcopy , passwordshowinput, navbaropen } from "./variables.js";
 import { creates , copy, randoms, navbar2, navbar1, show, hide  } from "./functions.js";
passwordcreatebutton.onclick = function(){creates()}
passwordcreateinput.onkeyup = function(e){if(e.key === 'Enter'){creates()}console.log(e)}
passwordshowbutton.onclick = function(){show()}
passwordhidebutton.onclick = function(){hide()}
passwordshowcopy.onclick = function(){copy()}
navbaropen.onclick = function(){navbar1()}
navbarclose.onclick = function(){navbar2()}
onkeyup = function(e){if(e.key === 'Escape'){navbar2()}}
navbarcolorrandom.onclick = function(){randoms()}
navbarcolorinput.onkeyup = function (){document.body.style.backgroundColor = `#${navbarcolorinput.value}`}
navbarcolordark.onclick = function (){document.body.style.backgroundColor = `#1d2a35`;
 navbarcolordark.classList.add('remove');
 navbarcolorwhite.classList.remove('remove')
}
navbarcolorwhite.onclick = function (){document.body.style.backgroundColor = `#EEE`;
 navbarcolorwhite.classList.add('remove');
  navbarcolordark.classList.remove('remove')
}