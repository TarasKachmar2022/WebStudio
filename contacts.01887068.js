!function(){var e,t,a;e=document.querySelector("[data-menu]"),t=document.querySelector("[data-menu-btn]"),a=document.querySelector("[data-page]"),t.addEventListener("click",(function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),t.classList.toggle("active"),a.classList.toggle("no-scroll")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(a){a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));var n=document.querySelector("#phone");new IMask(n,{mask:"+{38}(000)000-00-00"})}();
//# sourceMappingURL=contacts.01887068.js.map