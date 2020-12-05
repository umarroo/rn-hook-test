const toUpperCase = val => {
  return val.toUpperCase();
};

const formatNumber = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

const formatDate = date => {
  const d = new Date(date);
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const day = d.getDate();
  const monthIndex = d.getMonth();
  const year = d.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
};

const convertObjectToArray = obj => {
  return Object.keys(obj).map(key => {
    const element = obj[key];
    return element;
  });
};

export {toUpperCase, formatNumber, formatDate, convertObjectToArray};
