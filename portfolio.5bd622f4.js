const{height:e}=document.querySelector(".page-header").getBoundingClientRect();document.body.style.paddingTop=`${e}px`,(()=>{const e=document.querySelector("[data-menu]"),t=document.querySelector("[data-menu-btn]"),o=document.querySelector("[data-page]");t.addEventListener("click",(()=>{const a="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),t.classList.toggle("active"),o.classList.toggle("no-scroll")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(a=>{a.matches&&(e.classList.remove("is-open"),t.classList.remove("active"),o.classList.remove("no-scroll"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=portfolio.5bd622f4.js.map
