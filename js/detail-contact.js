
const cityOpenEl = document.querySelector('.contacts__overlay-city');
const cityBtnAllEl = document.querySelectorAll('.contacts__card-detail');
const sectionContactsEl = document.querySelector('.contacts');
const imgAfterContactEl = document.querySelector('.contacts__img');
const contactTitleEl = document.querySelector('.contacts__title');



cityOpenEl.addEventListener('click', onCityClick);

function onCityClick(e) {
    if (e.target.nodeName !== "P") {
        return
    }

    [...cityBtnAllEl].map((item) => {
        if (item.dataset.name == e.target.dataset.name) {
            item.classList.add("is-open");
            if (window.innerWidth < 385) {
                imgAfterContactEl.style.display = 'none';
                contactTitleEl.style.marginBottom = '40px';
            }
            if (window.innerWidth < 1439) {
                contactTitleEl.style.marginBottom = '60px';
            }
        } else {
            sectionContactsEl.addEventListener('click', onAnyPress);
            item.classList.remove("is-open");
        }
    }
    )
}

function onAnyPress(e) {
    if (e.target.nodeName !== "P") {
        imgAfterContactEl.style.display = 'block';
        contactTitleEl.style.marginBottom = '80px';
        [...cityBtnAllEl].map((item) => {
            item.classList.remove("is-open");
        })
    }

}