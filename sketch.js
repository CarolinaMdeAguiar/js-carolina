let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de rpgs");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaDeAventura = campoAventura.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura,);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura,) {
    if (idade >= 10) {
        if (idade >= 18) {
            return "Chamado de Cthulhu";
        } else {
          if(idade >= 14) {
            if(gostaDeFantasia || gostaDeAventura) {
              return "Legend of the Five Rings";
            } else {
            return "Vampire: The Masquerade"
            }
          }
            if (gostaDeFantasia) {
                return "Fate";
            } else {
                return "Savage Worlds";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "Shadow of the Demon Lord";
        } else {
            return "Deadlands";
        }
    }
}
