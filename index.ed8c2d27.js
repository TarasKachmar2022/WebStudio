!function(){var e,t,o;e=document.querySelector("[data-menu]"),t=document.querySelector("[data-menu-btn]"),o=document.querySelector("[data-page]"),t.addEventListener("click",(function(){var a="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),t.classList.toggle("active"),o.classList.toggle("no-scroll")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("[data-page]")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();var a=document.querySelector("#phone");new IMask(a,{mask:"+{38}(000)000-00-00"})}();
//# sourceMappingURL=index.ed8c2d27.js.map
