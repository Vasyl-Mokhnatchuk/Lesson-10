const prompt = require('prompt-sync')();

(async () => {
  const [day, month, year] = prompt('Введіть дату у форматі DD MM YY: ').split(' ').map(Number);
  const [hours, minutes, seconds] = prompt('Введіть час у форматі HH MM SS: ').split(' ').map(Number);

  const date = new Date(year, month - 1, day, hours, minutes, seconds);
  await new Promise(resolve => setTimeout(resolve, date.getTime() - Date.now()));

  console.log('Дія виконана о ' + new Date());
})();