const btn = document.querySelector("#entrar");

    btn.addEventListener("click", function(e){

    e.preventDefault();

    const nome = document.querySelector("#nome");
    const senha = document.querySelector("#senha");
    const name = nome.value;
    const pass = senha.value;

    console.log(name);
    console.log(pass);
})