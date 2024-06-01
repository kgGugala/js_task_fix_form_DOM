Array.from(document.querySelector(".login-wrap").querySelectorAll("input")).forEach(function(e){var t=document.createElement("label");t.setAttribute("for",e.id);var r=e.name.charAt(0).toUpperCase()+e.name.slice(1).toLowerCase();t.textContent=r,t.classList.add("field-label"),e.parentNode.insertBefore(t,e),e.setAttribute("placeholder",r)});
//# sourceMappingURL=index.21b93681.js.map
