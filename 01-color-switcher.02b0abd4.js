const e=document.querySelector(".start"),t=document.querySelector(".stop");e.addEventListener("click",(function(d){o(e,t),n=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(function(d){o(t,e),clearInterval(n)}));let n=null;function o(e,t){e.disabled=!0,t.disabled=!1}t.disabled=!0;
//# sourceMappingURL=01-color-switcher.02b0abd4.js.map
