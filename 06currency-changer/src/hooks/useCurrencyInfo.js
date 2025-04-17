import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null); // initialize as null

  useEffect(() => {
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;



// import { useState, useEffect } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState();
//   useEffect(() => {
//     return () => {
//       fetch(
//         // `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//         `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
//       )
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]));
//     };
//   }, [currency]);
//   console.log(data);
//   return data;
// }

// export default useCurrencyInfo;


