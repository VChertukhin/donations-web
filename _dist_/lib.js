export const moneyFormat = x => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};
export const todayDate = () => {
  const today = new Date();
  return {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear()
  };
};
const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
export const dateFormat = date => {
  // DatePicker may return incorrect values
  if (date.month == 0 || date.day == 0 || date.year == 0) {
    return '';
  } else {
    return `${date.day} ${months[date.month - 1]} ${date.year}`;
  }
};