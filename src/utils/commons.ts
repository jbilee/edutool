export const getDateString = (epoch: number) => {
  const date = new Date(epoch);
  return date.toLocaleDateString("ko-KR");
};
export const getDueStatus = (start: number, end: number) => {
  const currentEpoch = Date.now();
  const timeTill = start - currentEpoch;
  const timeLeft = end - currentEpoch;
  if (timeLeft <= 0) return "마감";
  if (timeTill > 0) return "시작 전";
  return "진행 중";
};
