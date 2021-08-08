import axios from "axios";
const GetCurrencyAPI = async (from, to, amount) => {
  const res = await fetch(
    `http://data.fixer.io/api/convert?access_key=653857d3d9757cda5ae39c0b241a726f&from=${from}&to=${to}&amount=${amount}`
  )
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
    });

  return res;
};
export const ChangeCost = (data, curr, ChangedCurr) => {
  if (ChangedCurr === null) {
    return data;
  }
  if (ChangedCurr === curr) {
    return data;
  } else {
    console.log(GetCurrencyAPI(curr, ChangedCurr, data));
  }
};