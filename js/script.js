async function carregarFrases() {
    const resposta = await fetch("data/frases.json");
    return await resposta.json();
}

async function iniciarHero() {
    const frases = await carregarFrases();
    const index = Math.floor(Math.random() * frases.length);
    document.getElementById("hero-text").textContent = frases[index];
}

iniciarHero();

window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});
