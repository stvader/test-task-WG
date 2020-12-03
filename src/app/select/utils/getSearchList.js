export const getSearchList = (value, list) => {
  const valueLowerCase = value.toLowerCase();
  return list.filter((elem) => {
    const elemToLowerCase = elem.toLowerCase();
    return elemToLowerCase.includes(valueLowerCase)
  });
}