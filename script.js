



//span.textContent pega o conteudo do span

/*var elementos = document.querySelectorAll('span');
var aplicacaoElemento = document.getElementById('aplicacaoElemento')

        // Itera sobre os spans selecionados
        elementos.forEach(function(elemento) {
            aplicacaoElemento.innerHTML = '<h2>${elemento}</h2> <br> <p>${aplicacao}</p>'
        });*/

//espaço

// Seu array de objetos
const elementos = [
    { nome: "Hidrogênio", simbolo: "H", exemplo: "Água (H2O)" },
    { nome: "Hélio", simbolo: "He", exemplo: "Enchimento de balões" },
    { nome: "Lítio", simbolo: "Li", exemplo: "Baterias recarregáveis" },
    { nome: "Berílio", simbolo: "Be", exemplo: "Componentes de ligas metálicas" },
    { nome: "Boro", simbolo: "B", exemplo: "Fibras de vidro" },
    { nome: "Carbono", simbolo: "C", exemplo: "Diamante, grafite" },
    { nome: "Nitrogênio", simbolo: "N", exemplo: "Ar atmosférico" },
    { nome: "Oxigênio", simbolo: "O", exemplo: "Ar atmosférico, água (H2O)" },
    { nome: "Flúor", simbolo: "F", exemplo: "Dentifrícios" },
    { nome: "Neônio", simbolo: "Ne", exemplo: "Luzes de néon" },
    { nome: "Sódio", simbolo: "Na", exemplo: "Sal de cozinha (NaCl)" },
    { nome: "Magnésio", simbolo: "Mg", exemplo: "Suplementos alimentares" },
    { nome: "Alumínio", simbolo: "Al", exemplo: "Embalagens de alimentos, estruturas de aviões" },
    { nome: "Silício", simbolo: "Si", exemplo: "Chips de computador" },
    { nome: "Fósforo", simbolo: "P", exemplo: "Fertilizantes, DNA" },
    { nome: "Enxofre", simbolo: "S", exemplo: "Produção de ácido sulfúrico" },
    { nome: "Cloro", simbolo: "Cl", exemplo: "Água sanitária (NaClO)" },
    { nome: "Argônio", simbolo: "Ar", exemplo: "Preenchimento de lâmpadas incandescentes" },
    { nome: "Potássio", simbolo: "K", exemplo: "Adubos, bananas" },
    { nome: "Cálcio", simbolo: "Ca", exemplo: "Leite, ossos" },
    { nome: "Escândio", simbolo: "Sc", exemplo: "Lâmpadas de vapor de mercúrio" },
    { nome: "Titânio", simbolo: "Ti", exemplo: "Ligas metálicas, pigmentos" },
    { nome: "Vanádio", simbolo: "V", exemplo: "Ligas de aço, catalisadores" },
    { nome: "Crômio", simbolo: "Cr", exemplo: "Cromagem, aços inoxidáveis" },
    { nome: "Manganês", simbolo: "Mn", exemplo: "Ligas de aço, baterias" },
    { nome: "Ferro", simbolo: "Fe", exemplo: "Construção, veículos, equipamentos" },
    { nome: "Cobalto", simbolo: "Co", exemplo: "Imãs permanentes, pigmentos" },
    { nome: "Níquel", simbolo: "Ni", exemplo: "Moedas, aço inoxidável" },
    { nome: "Cobre", simbolo: "Cu", exemplo: "Fios elétricos, tubos de encanamento" },
    { nome: "Zinco", simbolo: "Zn", exemplo: "Pilhas, revestimento de aço" },
    { nome: "Gálio", simbolo: "Ga", exemplo: "Semicondutores, LEDs" },
    { nome: "Germânio", simbolo: "Ge", exemplo: "Semicondutores, fibra óptica" },
    { nome: "Arsênio", simbolo: "As", exemplo: "Tratamento de madeira, semicondutores" },
    { nome: "Selênio", simbolo: "Se", exemplo: "Fotocélulas, semicondutores" },
    { nome: "Bromo", simbolo: "Br", exemplo: "Desinfetantes, retardantes de chama" },
    { nome: "Criptônio", simbolo: "Kr", exemplo: "Iluminação, lasers" },
    { nome: "Rubídio", simbolo: "Rb", exemplo: "Relógios atômicos, células fotoelétricas" },
    { nome: "Estrôncio", simbolo: "Sr", exemplo: "Pirotecnia, fogos de artifício" },
    { nome: "Ítrio", simbolo: "Y", exemplo: "Fósforos de televisão, lasers" },
    { nome: "Zircônio", simbolo: "Zr", exemplo: "Reatores nucleares, joias" },
    { nome: "Nióbio", simbolo: "Nb", exemplo: "Superligas, equipamentos de laboratório" },
    { nome: "Molibdênio", simbolo: "Mo", exemplo: "Ligas metálicas, lubrificantes" },
    { nome: "Tecnécio", simbolo: "Tc", exemplo: "Marcadores radioativos, eletrônicos" },
    { nome: "Rutênio", simbolo: "Ru", exemplo: "Ligas metálicas, catalisadores" },
    { nome: "Ródio", simbolo: "Rh", exemplo: "Conversores catalíticos, joias" },
    { nome: "Paládio", simbolo: "Pd", exemplo: "Conversores catalíticos, joias" },
    { nome: "Prata", simbolo: "Ag", exemplo: "Joias, moedas" },
    { nome: "Cádmio", simbolo: "Cd", exemplo: "Baterias, revestimento de metais" },
    { nome: "Índio", simbolo: "In", exemplo: "Telas de LCD, semicondutores" },
    { nome: "Estanho", simbolo: "Sn", exemplo: "Solda, latas de alimentos" },
    { nome: "Antimônio", simbolo: "Sb", exemplo: "Baterias, retardantes de chama" },
    { nome: "Telúrio", simbolo: "Te", exemplo: "Semicondutores, lentes de câmera" },
    { nome: "Iodo", simbolo: "I", exemplo: "Desinfetantes, iodeto de potássio" },
    { nome: "Xenônio", simbolo: "Xe", exemplo: "Lâmpadas de flash, anestesia" },
    { nome: "Césio", simbolo: "Cs", exemplo: "Relógios atômicos, termoiônicos" },
    { nome: "Bário", simbolo: "Ba", exemplo: "Raio-X, combustíveis de foguete" },
    { nome: "Lantânio", simbolo: "La", exemplo: "Lâmpadas de arco elétrico, supercondutores" },
    { nome: "Cério", simbolo: "Ce", exemplo: "Catalisadores, pedras preciosas" },
    { nome: "Praseodímio", simbolo: "Pr", exemplo: "Pedras preciosas, pigmentos" },
    { nome: "Neodímio", simbolo: "Nd", exemplo: "Ímãs de alta potência" },
    { nome: "Promécio", simbolo: "Pm", exemplo: "Marcadores radioativos" },
    { nome: "Samário", simbolo: "Sm", exemplo: "Imãs de alta potência, controle nuclear" },
    { nome: "Európio", simbolo: "Eu", exemplo: "Fósforos, monitores de TV" },
    { nome: "Gadolínio", simbolo: "Gd", exemplo: "Lâmpadas fluorescentes, reatores nucleares" },
    { nome: "Térbio", simbolo: "Tb", exemplo: "Lâmpadas de vapor de mercúrio, ímãs" },
    { nome: "Disprósio", simbolo: "Dy", exemplo: "Lâmpadas de vapor de mercúrio, ímãs" },
    { nome: "Hólmio", simbolo: "Ho", exemplo: "Motores de foguete, lasers" },
    { nome: "Érbio", simbolo: "Er", exemplo: "Pigmentos, lasers" },
    { nome: "Túlio", simbolo: "Tm", exemplo: "Lasers, detectores de infravermelho" },
    { nome: "Itérbio", simbolo: "Yb", exemplo: "Relógios atômicos, detectores de radiação" },
    { nome: "Lutécio", simbolo: "Lu", exemplo: "Catalisadores, detectores de radiação" },
    { nome: "Háfnio", simbolo: "Hf", exemplo: "Reatores nucleares, lâmpadas de vapor de mercúrio" },
    { nome: "Tântalo", simbolo: "Ta", exemplo: "Capacitores, próteses médicas" },
    { nome: "Wolframio", simbolo: "W", exemplo: "Filamentos de lâmpadas, armas" },
    { nome: "Rênio", simbolo: "Re", exemplo: "Catalisadores, ligas super-resistentes" },
    { nome: "Ósmio", simbolo: "Os", exemplo: "Penas de canetas, joias" },
    { nome: "Irídio", simbolo: "Ir", exemplo: "Agulhas de injeção, joias" },
    { nome: "Platina", simbolo: "Pt", exemplo: "Joias, conversores catalíticos" },
    { nome: "Ouro", simbolo: "Au", exemplo: "Joias, eletrônicos" },
    { nome: "Mercúrio", simbolo: "Hg", exemplo: "Termômetros, lâmpadas fluorescentes" },
    { nome: "Tálio", simbolo: "Tl", exemplo: "Vidros especiais, semicondutores" },
    { nome: "Chumbo", simbolo: "Pb", exemplo: "Cabos elétricos, baterias" },
    { nome: "Bismuto", simbolo: "Bi", exemplo: "Pigmentos, medicamentos" },
    { nome: "Polônio", simbolo: "Po", exemplo: "Marcadores radioativos, antiestáticos" },
    { nome: "Astato", simbolo: "At", exemplo: "Marcadores radioativos" },
    { nome: "Radônio", simbolo: "Rn", exemplo: "Terapia de câncer, rastreamento de petróleo" },
    { nome: "Frâncio", simbolo: "Fr", exemplo: "Relógios atômicos, pesquisa nuclear" },
    { nome: "Rádio", simbolo: "Ra", exemplo: "Radioterapia, detector de fumaça" },
    { nome: "Actínio", simbolo: "Ac", exemplo: "Marcadores radioativos, reatores nucleares" },
    { nome: "Tório", simbolo: "Th", exemplo: "Mantas de incandescência, reatores nucleares" },
    { nome: "Protactínio", simbolo: "Pa", exemplo: "Marcadores radioativos, reatores nucleares" },
    { nome: "Urânio", simbolo: "U", exemplo: "Reatores nucleares, armas nucleares" },
    { nome: "Netúnio", simbolo: "Np", exemplo: "Marcadores radioativos, reatores nucleares" },
    { nome: "Plutônio", simbolo: "Pu", exemplo: "Armas nucleares, reatores nucleares" },
    { nome: "Amerício", simbolo: "Am", exemplo: "Marcadores radioativos, reatores nucleares" },
    { nome: "Cúrio", simbolo: "Cm", exemplo: "Marcadores radioativos, reatores nucleares" },
    { nome: "Berquélio", simbolo: "Bk", exemplo: "Marcadores radioativos, reatores nucleares" },
    { nome: "Califórnio", simbolo: "Cf", exemplo: "Marcadores radioativos, reatores nucleares" },
    { nome: "Einstênio", simbolo: "Es", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Férmio", simbolo: "Fm", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Mendelévio", simbolo: "Md", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Nobélio", simbolo: "No", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Laurêncio", simbolo: "Lr", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Rutherfórdio", simbolo: "Rf", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Dúbnio", simbolo: "Db", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Seabórgio", simbolo: "Sg", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Bóhrio", simbolo: "Bh", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Hássio", simbolo: "Hs", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Meitnério", simbolo: "Mt", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Darmstácio", simbolo: "Ds", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Roentgênio", simbolo: "Rg", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Copernício", simbolo: "Cn", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Nihônio", simbolo: "Nh", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Fleróvio", simbolo: "Fl", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Moscóvio", simbolo: "Mc", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Livermório", simbolo: "Lv", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Tenessino", simbolo: "Ts", exemplo: "Pesquisa científica, reatores nucleares" },
    { nome: "Oganesónio", simbolo: "Og", exemplo: "Pesquisa científica, reatores nucleares" }
];

//var elementos = document.querySelectorAll('span');
var aplicacaoElemento = document.getElementById('aplicacaoElemento');

// Adicionando um evento de clique a cada span
document.querySelectorAll('.elemento').forEach((span, index) => {
    span.addEventListener('click', () => {

        const objeto = elementos[index];

        const titulo = document.createElement('h2');
        titulo.textContent = objeto.nome;
        
        const quebraDeLinha = document.createElement('br');
        
        const paragrafo = document.createElement('p');
        paragrafo.textContent = objeto.exemplo;

        const corDeFundo = window.getComputedStyle(span).backgroundColor;

        aplicacaoElemento.innerHTML = '';

        aplicacaoElemento.appendChild(titulo);
        aplicacaoElemento.appendChild(quebraDeLinha);
        aplicacaoElemento.appendChild(paragrafo);
        aplicacaoElemento.classList.add('aplicacao');
        aplicacaoElemento.style.backgroundColor = corDeFundo;

    });
});