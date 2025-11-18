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
    const fade = Math.min(window.scrollY / 150, 1);
    const hero = document.querySelector(".hero h1");
    const body = document.body;

    hero.style.opacity = 1 - fade;
    hero.style.transform = `translateY(${fade * -20}px)`;

    if (fade >=0.7) {
        body.classList.add("banner-visible");
    } else {
        body.classList.remove("banner-visible");
    }
});
