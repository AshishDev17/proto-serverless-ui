const convertTimeStamp = (timeStamp) => {
  const date = new Date(timeStamp);

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const hours = date.getHours();
  const minutes = addZero(date.getMinutes().toString());
  const seconds = addZero(date.getSeconds().toString());

  const dateStr = day + ' ' +  month + ' ' + hours + ':' + minutes + ':' + seconds;

  return dateStr;
 };


 const addZero = (mins) => {
  if(mins.length === 1) {
    return '0' + mins;
  } 

  return mins;
};

 const days = {
  0: 'Sun',
  1: 'Mon',
  2: "Tue",
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat'
};

const months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
};



export const reports = {
    timeStamps: [convertTimeStamp('2020-12-28T19:01:58.974Z'), convertTimeStamp('2020-12-28T19:01:58.974Z'), convertTimeStamp('2020-12-28T19:01:58.974Z'), convertTimeStamp('2020-12-28T19:01:58.974Z')],
    scenariosCreated: [1856, 1856, 1856, 1856],
    latencies: {
      minLatencies: [535.6, 535.6, 535.6, 535.6],
      maxLatencies: [2464, 2464, 2464, 2464],
      medians:[611.2, 611.2, 611.2, 611.2],
      p95s: [740.8, 740.8, 740.8, 740.8],
      p99s: [1364.3, 1364.3, 1364.3, 1364.3]
    },
    codes: [
        {
            200: 1856
        },
        {
            200: 1856
        },
        {
            200: 1856
        },
        {
            200: 1856
        }
    ]
};




