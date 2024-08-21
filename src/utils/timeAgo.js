export const timeAgo = (timestamp) => {
  const now = new Date();
  const past = new Date(timestamp);

  const diffInSeconds = Math.floor((now - past) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears >= 1) {
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""}`;
  } else if (diffInMonths >= 1) {
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""}`;
  } else if (diffInWeeks >= 1) {
    return `${diffInWeeks} week${diffInWeeks > 1 ? "s" : ""}`;
  } else if (diffInDays >= 1) {
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""}`;
  } else if (diffInHours >= 1) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""}`;
  } else if (diffInMinutes >= 1) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""}`;
  } else {
    return `${diffInSeconds} second${diffInSeconds > 1 ? "s" : ""}`;
  }
};
