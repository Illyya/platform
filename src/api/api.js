export function sendingData(inputData) {
  Object.keys(inputData).length == 0 
    ? alert('Введите данные') 
    : alert('Ведённые данные: ' + JSON.stringify(inputData));
}