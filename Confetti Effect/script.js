const jsConfetti = new JSConfetti();

document
.querySelector("#congrats")
.addEventListener("click", (e) => {
    jsConfetti.addConfetti();
})