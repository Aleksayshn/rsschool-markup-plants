(() => {
    const buttonsRef = document.querySelector(".service__button-list");
    const serviceList = document.querySelectorAll(".service__cards-item");
    const buttonsList = document.querySelectorAll(".button service__button-item");

    let activeListBtn = [];
    let activeListItems = [];

    function onBtnClick(e) {

        if (e.target.nodeName !== "BUTTON") {
            return;
        }

        if (!activeListBtn.includes(e.target.dataset.name)) {
            activeListBtn.push(e.target.dataset.name);
            if (activeListBtn.length <= 2) {
                e.target.classList.add("active");
                e.target.style = "color: #ffffff; background-color: #e06733;";
                e.target.addEventListener("mouseover", () => {
                    e.target.style = "color: #e06733; background-color:transparent";
                });
                e.target.addEventListener("mouseout", () => {
                    e.target.style = "color: #ffffff; background-color: #e06733;";
                });
                if (activeListBtn.length === 2) {
                    [...buttonsList].map((item) => {
                        if (item.classList.contains("active")) {
                            item.disabled = false;
                        } else {
                            item.disabled = true;
                        }
                    });
                }
            }
        }
        else {
            activeListBtn = activeListBtn.filter(
                (item) => item !== e.target.dataset.name
            );
            e.target.classList.remove("active");
            e.target.style = "color: #e06733; background-color:transparent";
            e.target.addEventListener("mouseover", () => {
                e.target.style = "color: #ffffff; background-color: #e06733;";
            });
            e.target.addEventListener("mouseout", () => {
                e.target.style = "color: #e06733; background-color:transparent";
            });
            if (activeListBtn.length === 1) {
                [...buttonsList].map((item) => {
                    item.disabled = false;
                });
            }
        }
        activeListItems = [...serviceList]
            .map((item) => {
                if (item.classList.contains("disabled")) {
                    item.classList.remove("disabled");
                }
                return item;
            })
            .filter((item) => {
                return !activeListBtn.includes(item.dataset.set);
            });

        activeListItems.map((item) => {
            return item.classList.toggle("disabled");
        });

        if (activeListItems.length === 6) {
            activeListItems = [...serviceList].map((item) => {
                if (item.classList.contains("disabled")) {
                    item.classList.remove("disabled");
                }
                return item;
            });
        }
    }

    buttonsRef.addEventListener("click", onBtnClick);
})();