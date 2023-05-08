const caixa1 = document.querySelector(".caixa");
document.addEventListener("keydown", (e) => {
    let chaveNome = e.key === 32 ? "Space" : e.key;
    caixa1.querySelector(".codigo").innerText = e.key;
    caixa1.querySelector(".name").innerText = chaveNome.toUpperCase();
    caixa1.querySelector(".chave span").innerText = chaveNome;
    caixa1.querySelector(".codigos span").innerText = e.which;
    caixa1.classList.add("active");
})