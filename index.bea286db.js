(()=>{const e=document.querySelector("[data-menu]"),t=document.querySelector("[data-menu-btn]");t.addEventListener("click",(()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),t.classList.toggle("active");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)})),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("[data-page]")};function t(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();const e=document.querySelector("#phone");new IMask(e,{mask:"+{38}(000)000-00-00"});
//# sourceMappingURL=index.bea286db.js.map
