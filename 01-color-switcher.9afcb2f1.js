!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop"),r=document.querySelector("body"),n=null;t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),n=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",!0),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.9afcb2f1.js.map