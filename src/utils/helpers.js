// helpers.js

// Format a date in a user-friendly way
export const formatDate = (
  date,
  options = { year: "numeric", month: "long", day: "numeric" }
) => {
  return new Date(date).toLocaleDateString(undefined, options);
};

// Generate a random alphanumeric string
export const generateRandomString = (length = 8) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
};

// Capitalize the first letter of a string
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Convert snake_case to camelCase
export const snakeToCamel = (str) => {
  return str.replace(/(_\w)/g, (match) => match[1].toUpperCase());
};

// Truncate a string and add ellipsis if it's too long
export const truncateString = (str, maxLength = 20) => {
  return str.length > maxLength ? `${str.substring(0, maxLength)}...` : str;
};

// Deep clone an object using JSON methods
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Usage
// import { formatDate, generateRandomString, capitalizeFirstLetter } from './helpers';

// const formattedDate = formatDate(new Date());
// const randomString = generateRandomString();
// const capitalizedWord = capitalizeFirstLetter('hello');

// console.log(formattedDate);
// console.log(randomString);
// console.log(capitalizedWord);
