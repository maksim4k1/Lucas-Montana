infoModal = document.querySelector(".info__modal");
openModalButton = document.getElementById("openModal");
sendMessageButton = document.getElementById("sendMessage");
infoModal.addEventListener("click", function (event) {
    if(event.target === event.currentTarget){
        toggleInfoModal();
    }
});
openModalButton.addEventListener("click", toggleInfoModal);
sendMessageButton.addEventListener("click", function (event) {
    event.preventDefault();
    let inputs = document.querySelectorAll(".info__input");
    for(let i of inputs){
        if(i.value.length < 2) return;
    }

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    console.log(`Username: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`)
    toggleInfoModal();
})
function toggleInfoModal() {
    infoModal.classList.toggle("open-modal");
    document.body.classList.toggle("body-overflow");
}

// PORTFOLIO
portfolioModal = document.querySelector(".portfolio__modal")
images = document.querySelectorAll(".portfolio__list");
modalImage = document.querySelector(".portfolio__modal-image");
closeModalButton = document.getElementById("closeModal")
for(let i of images){
    i.addEventListener("click", togglePortfolioModal);
}
closeModalButton.addEventListener("click", togglePortfolioModal);
portfolioModal.addEventListener("click", function (event) {
    if(event.target === event.currentTarget) togglePortfolioModal();
})
function togglePortfolioModal(event) {
    portfolioModal.classList.toggle("open-modal");
    document.body.classList.toggle("body-overflow");
    if(event.target !== closeModalButton && event.target !== document.querySelector(".portfolio__list")){
        modalImage.childNodes[0].setAttribute("src", event.target.childNodes[0].getAttribute("src"));
    }
}