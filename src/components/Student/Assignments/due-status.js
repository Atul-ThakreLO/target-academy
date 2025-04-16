import { formatDate } from "@/components/Utils/Date Formater/formatDate";

export const dueStatus = (date) => {
  const todayDate = new Date();
  const dueDate = new Date(date);
  todayDate.setHours(0, 0, 0, 0);
  dueDate.setHours(0, 0, 0, 0);

  const diffTime = dueDate.getTime() - todayDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    if (diffDays === -1) {
      return "Expired yesterday";
    } else {
      return "Expired";
    }
  } else if (diffDays === 0) {
    return "Due today";
  } else if (diffDays === 1) {
    return "Expiring tomorrow";
  } else {
    return formatDate(date);
  }
};
