const getStudentIdsSum = (students) => {
  // Ensure the input is an array
  if (!Array.isArray(students)) {
    return 0; // Return 0 if the input is not an array
  }

  return students.reduce((accumulator, item) => accumulator + item.id, 0);
};

export default getStudentIdsSum;
