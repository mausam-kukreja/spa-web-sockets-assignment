import moment from 'moment';

const momentParse = t => moment(t);

const dateTimeAgo = t => {
  const target = momentParse(t);
  const now = moment();
  const hours = now.diff(target, 'hours');
  const minutes = now.diff(target, 'minutes');
  const days = now.diff(target, 'days');
  const date = momentParse(t).format('DD MMM h a');
  const time = momentParse(t).format('h:mm a');
  if (days >= 2) {
    return `${date}`;
  } else if (days === 1) {
    return `yesterday`;
  } else if (hours >= 1) {
    return `${time}`;
  } else if (minutes >= 1) {
    return 'few mins ago';
  }

  return 'few seconds ago';
};

export { dateTimeAgo };
