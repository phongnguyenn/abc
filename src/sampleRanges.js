import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

const ranges = {
  'Spring Break 2018': [moment('2018/03/01', dateFormat), moment('2018/03/31', dateFormat)],
  'Thanksgiving 2018': [moment('2018/11/24', dateFormat), moment('2018/11/30', dateFormat)]
};

export { ranges };