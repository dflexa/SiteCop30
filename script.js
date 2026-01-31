let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  header.classList.toggle("hide", scrollTop > lastScrollTop);
  lastScrollTop = scrollTop;
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
  });
});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Botão para voltar ao topo
const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Botão modo escuro
document.getElementById("toggleModo").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Tradutor Paraense - Gírias
const dicionarioParaense = {
    "égua": "Expressão de surpresa ou admiração, equivalente a 'Nossa!' ou 'Caramba!'.",
    "maninho": "Forma carinhosa de chamar alguém, equivalente a 'irmão'.",
    "maninha": "Forma carinhosa de chamar alguém, equivalente a 'irmã'.",
    "peixe": "Amigo ou colega.",
    "tu": "Uso do pronome 'tu' no lugar de 'você'.",
    "abestado": "Alguém distraído ou bobo.",
    "visagem": "Se refere a um fantasma ou espírito.",
    "espia": "Expressa 'olhe' ou 'veja'.",
    "brocado": "Expressa muita fome.",
    "pai d’égua": "Expressão de algo bom ou legal.",
    "só o filé": "Expressa algo muito bom e gostoso.",
    "ulha": "Refere-se a 'olhe' ou 'veja'.",
    "eras": "Expressa tristeza ou desânimo.",
    "têdoidé": "Expressa surpresa.",
    "tu é leso é": "Refere-se a alguém louco.",
    "selado": "Significa 'certo' ou 'ok'.",
    "mermão": "Refere-se a uma pessoa.",
    "pitiú": "Significa algo fedorento.",
    "asilado": "Expressa um grande desejo.",
    "nem te conto": "Significa quando alguém tem algo chocante para dizer.",
    "pior": "Refere-se a algo verdadeiro, certo ou real.",
    "arreda": "Significa para alguém se afastar ou sair do caminho.",
    "parente": "Forma de se referir a alguma pessoa.",
    "borimbora": "Refere-se a 'vamos embora' ou 'vamos sair'.",
    "pega o beco": "Significa para a pessoa sair do local.",
    "fuleiragem": "Significa falta de seriedade.",
    "de rocha": "Expressão de dar certeza a algo.",
    "pirento": "Significa algo sujo e machucado.",
    "pirenta": "Significa algo sujo e machucado.",
    "vixe maria": "Expressa surpresa e espanto."
  };
  
  
// Pega o formulário
const formTradutor = document.querySelector('.tradutor-form');
const entradaGiria = document.getElementById('inputGiria');
const traducaoTexto = document.getElementById('resultado');
const listaHistorico = document.getElementById('historico');
const botoesSugestao = document.querySelectorAll('.sugestao');

// Quando enviar o formulário
formTradutor.addEventListener('submit', function(event) {
  event.preventDefault();
  const giria = entradaGiria.value.trim().toLowerCase();
  traduzirGiria(giria);
  entradaGiria.value = '';
});

// Quando clicar nas sugestões
botoesSugestao.forEach(botao => {
  botao.addEventListener('click', () => {
    const giria = botao.textContent.trim().toLowerCase();
    traduzirGiria(giria);
  });
});

// Funções
function traduzirGiria(giria) {
  const traducao = dicionarioParaense[giria];
  if (traducao) {
    traducaoTexto.textContent = traducao;
    adicionarAoHistorico(giria, traducao);
  } else {
    traducaoTexto.textContent = 'Gíria não encontrada no dicionário.';
  }
}

function adicionarAoHistorico(giria, traducao) {
  const itemHistorico = document.createElement('li');
  itemHistorico.textContent = `${giria}: ${traducao}`;
  listaHistorico.prepend(itemHistorico);
}