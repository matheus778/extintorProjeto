
function getMonth() {
  const currentMonth = new Date().getMonth();
  const monthList = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];
  return monthList[currentMonth];
}
module.exports = {getMonth};