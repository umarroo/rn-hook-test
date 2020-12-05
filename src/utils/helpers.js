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

const sortName = (inputArr, order) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len-1; j++) {
          if (inputArr[j].beneficiary_name > inputArr[j + 1].beneficiary_name) {
            let tmp = inputArr[j];
            inputArr[j] = inputArr[j + 1];
            inputArr[j + 1] = tmp;
          }
      }
  }
  if (order == 'descend'){
    return inputArr.reverse();
  }else{
    return inputArr;
  }
};

const sortTime = (inputArr, order) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len-1; j++) {
          if (inputArr[j].created_at < inputArr[j + 1].created_at) {
            let tmp = inputArr[j];
            inputArr[j] = inputArr[j + 1];
            inputArr[j + 1] = tmp;
          }
      }
  }
  if (order == 'latest'){
    return inputArr.reverse();
  }else{
    return inputArr;
  }
};

export {toUpperCase, formatNumber, formatDate, convertObjectToArray, sortName, sortTime};
