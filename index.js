console.log(`Trabalhando com listas`);

console.log(`Cidades que já visitei:`);

const saoPaulo = `São Paulo`;
const paranagua = `Paranaguá`;
const florianopolis = `Florianópolis`;
const natal = `Natal`;
const curiuva = `Curiúva`;

console.log(saoPaulo, paranagua, florianopolis, natal, curiuva)

const cidadesQueJaVisitei = new Array(
  `São Paulo`,
  `Paranaguá`,
  `Florianópolis`,
  `Natal`,
  `Curiúva`
);

cidadesQueJaVisitei.push(`Ponta Grossa`);

console.log(cidadesQueJaVisitei);

console.log(`A cidade mais linda:`);
console.log(cidadesQueJaVisitei[3])

console.log(`Meus amigos me disseram que eu nunca fui à Paranagua, eu estava muito bêbada e ele mentiram para mim.`);

cidadesQueJaVisitei.splice(1, 1);
// primeiro número no splice diz a posição do elemento que será excluído.
//o segundo número informa quantos elementos serão excluídos.
console.log(cidadesQueJaVisitei);