const validateForm = (values) => {
  // username validation
  const usernameRegex = /^[A-Za-z0-9_.!?-]{6,60}$/;
  if (!usernameRegex.test(values.username)) {
    return `Username must be 6-60 characters long and 
                can only contain English 
                letters, numbers, and _.!?-`;
  }

  // Email validation
  const emailRegex = /^[A-Za-z0-9_.-]+@[A-Za-z0-9.-]+\.[c][o][m]$/;
  if (!emailRegex.test(values.email)) {
    return 'Email must only contain English letters and special signs, have "@" not at the start or end, and end with ".com".';
  }

  // Password must be 7-12 characters long and include at least one uppercase letter
  const passwordRegex = /^(?=.*[A-Z]).{7,12}$/;
  if (!passwordRegex.test(values.password)) {
    return "Password must be 7-12 characters long and include at least one uppercase letter.";
  }

  // Check if password and confirm password match
  if (values.password !== values.confirmPassword) {
    return "Passwords do not match.";
  }

  // First and Last Name validation
  const nameRegex = /^[A-Za-z]{2,}$/;

  if (!nameRegex.test(values.firstName)) {
    return "First name must only contain at least 2 letters.";
  }

  if (!nameRegex.test(values.lastName)) {
    return "Last name must only contain at least 2 letters.";
  }

  //City name validation
  if (values.city === "") {
    return "You should insert city";
  }

  //Street name validation
  const streetRegex = /^[\u05d0-\u05ea\s]{2,}$/;

  if (!streetRegex.test(values.street)) {
    return "Street name should be with hebrew letters.";
  }

  // Check if house number is not negative
  if (values.houseNumber < 0) {
    return "House number is not valide.";
  }

  //image validation{
  if (values.image) {
    const imageType = values.image.name.split(".");
    if (
      imageType[imageType.length - 1] !== "jpg" &&
      imageType[imageType.length - 1] !== "jpeg"
    )
      return `Image format has to be "jpg" or "jpeg"`;
  } else values.image = "hw3/src/images/blank-profile-picture.jpg";

  //date birth validation
  const currentDate = new Date();
  if (values.birthDate > currentDate) {
    return "Date of birth cannot be in the future.";
  }

  let age = currentDate.getFullYear() - values.birthDate.getFullYear();

  // Check if birthday has occurred this year
  const birthMonth = values.birthDate.getMonth();
  const currentMonth = currentDate.getMonth();
  const birthDay = values.birthDate.getDate();
  const currentDay = currentDate.getDate();

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  // Check if the person is under 18 years old
  if (!age) {
    return "You should insert your birth date";
  } else if (age < 18) {
    return "Person is under 18 years old";
  } else if (age > 120) {
    return "person cant be older than 120 age";
  }
};

export const cities = [
  "Tel Aviv",
  "Bat Hefer",
  "Netanya",
  "Rishon Letzion",
  "Hadera",
  "Rehovot",
  "Jerusalem",
];

export default validateForm;
