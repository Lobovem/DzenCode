export const formatDateWithDot = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month}. ${year}`;
};

export const formatDateWithSlashNameMonthFull = (date: string): string => {
  const dateFull = new Date(date);

  const day = dateFull.getDate();
  const month = dateFull.toLocaleString('en-US', { month: 'short' });
  const year = dateFull.getFullYear();
  return `${day} / ${month} / ${year}`;
};

export const formatDateWithSlashFull = (date: string): string => {
  const dateFull = new Date(date);

  const day = dateFull.getDate();
  const month = dateFull.getMonth();
  const year = dateFull.getFullYear();
  return `${day} / ${month} / ${year}`;
};

export const formatDateWithSlashSmall = (date: string): string => {
  const dateFull = new Date(date);

  const day = dateFull.getDate();
  const year = dateFull.getFullYear();
  return `${day} / ${year}`;
};