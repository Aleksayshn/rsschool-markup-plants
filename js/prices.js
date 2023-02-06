
const pricesBtnListEl = document.querySelector(".prices__button-list");
const dropdawnCards = document.querySelectorAll(".dropdawn-card");
const orderBtns = document.querySelectorAll(".dropdawn-card__button");
const pricesBtnTopEl = document.querySelectorAll(".prices__button-item--close");

pricesBtnListEl.addEventListener("click", onClickBtn);

function onClickBtn(e) {
    if (e.target.nodeName !== "svg" && e.target.nodeName !== "BUTTON") {
        return;
    }

    let btnCloseEl = null;
    [...pricesBtnTopEl].map((item) => {
        item.classList.remove('is-hidden')
        btnCloseEl = item.lastElementChild;
        btnCloseEl.classList.toggle('rotate')
    });

    [...dropdawnCards].map((item) => {
        if (item.dataset.name === e.target.dataset.name) {
            item.classList.toggle('open');

        } else {
            item.classList.remove('open')
        }

        const rotateBtn = [...orderBtns].find(
            (item) => item.dataset.name === e.target.dataset.name
        );
        rotateBtn.addEventListener("click", onOrderClick);
        const orderBtn = [...orderBtns].find(
            (item) => item.dataset.name === e.target.dataset.name
        );
        orderBtn.addEventListener("click", onOrderClick);
    });
}

function onOrderClick() {
    document.querySelector("#contacts").scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}
