export const moneyFormat = x => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};
export const todayDate = () => {
  const today = new Date();
  console.log(today.getDate());
  console.log(today.getMonth() + 1);
  console.log(today.getFullYear());
  return {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear()
  };
};
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
export const dateFormat = date => {
  return `${date.day} ${months[date.month - 1]} ${date.year}`;
};