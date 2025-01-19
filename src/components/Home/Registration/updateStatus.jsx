export const updateStatus = (formData, stage, setStageStatus) => {

  const isSuccess = () => {
    switch (stage) {
      case 0:
        return !!formData.student.email;
      case 1:
        return formData === "verified";
      case 2:
        return !!formData.info.student_name;
      case 3:
        return formData === "success";
      default:
        return false;
    }
  };
  setStageStatus((prev) => {
    return {
      ...prev,
      [stage]: isSuccess() ? "success" : "error",
    };
  });
};
