export const localeTime = (time) => {
  const day = new Date(time).toLocaleString().split(",")[0];
  return day;
};
