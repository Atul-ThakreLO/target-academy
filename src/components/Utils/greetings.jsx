export const greetingsFn = () => {
  const hours = new Date().getHours();
  if (hours >= 5 && hours < 12) {
    return "Good Morning !";
  } else if (hours >= 12 && hours < 17) {
    return "Good Afternoon !";
  } else if (hours >= 17 && hours < 20) {
    return "Good Evening !";
  } else if (hours >= 20 && hours < 24) {
    return "Good Night !";
  } else if (hours >= 0 && hours < 3) {
    return "Late Nignt !!!";
  } else {
    return "You're Early UP!!!";
  }
};
