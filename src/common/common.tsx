export const camelToCapWord = (camelStr: string) => {
  var replaceRs = camelStr.replace(/([A-Z])/g, " $1");
  var rs = replaceRs.charAt(0).toUpperCase() + replaceRs.slice(1);
  return rs;
};

export function timeFormatBrief(time: string) {
  const timeObj = new Date(time);
  return `${timeObj.getDate()}/${timeObj.getMonth() + 1}/${timeObj.getFullYear() % 1000} ${timeObj.getHours()}:${timeObj.getMinutes()}`;
};

export const getColorFromLevel = (level: number) => {
  switch (level) {
    case 1:
      return '#86d03d';
    case 2:
      return '#ffffff';
    case 3:
      return '#ffdb7d';
    case 4:
      return '#ef7300';
    case 5:
      return '#ff0bbb';
    case 6:
      return '#d10000';
    default:
      return 'transparent';
  }
};
