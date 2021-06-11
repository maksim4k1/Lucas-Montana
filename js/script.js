// INFO
const infoModal = document.querySelector(".info__modal");
const openModalButton = document.querySelector("#openModal");
const sendMessageButton = document.querySelector("#sendMessage");
openModalButton.addEventListener("click", toggleInfoModal);
infoModal.addEventListener("click", function (event) {
    if(event.target === event.currentTarget) toggleInfoModal();
})
sendMessageButton.addEventListener("click", function (event) {
    event.preventDefault();
    let inputs = document.querySelectorAll(".info__input");
    for(let i of inputs){
        if(i.value.length < 2) return;
    }

    let name = infoModal.querySelector("#name");
    let email = infoModal.querySelector("#email");
    let message = infoModal.querySelector("#message");
    console.log(`Username: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`)
    toggleInfoModal();
})
function toggleInfoModal() {
    infoModal.classList.toggle("open-modal");
    document.body.classList.toggle("body-overflow");
}
