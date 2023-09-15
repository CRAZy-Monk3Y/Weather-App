export const getCurrentDate = () => {
  const currDate = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  return currDate;
};
