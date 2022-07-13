export function getDateTimeFromISO(ISOTimeStamp: string) {
  const date = new Date(ISOTimeStamp);
  const time = date
    .toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
    .toString()
    .split(' ');
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDay();
  return { time: time[0], phase: time[1], year, month, day };
}
