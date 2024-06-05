const priceBitcoin = document.getElementById("price-bitcoin");
const priceEthereum = document.getElementById("price-ethereum");
const priceDogeCoin = document.getElementById("price-dogecoin");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-VC4oTGnsT3ziacGfttNLyz3T",
  },
};

const dataFetch = () => {
  fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      priceBitcoin.innerHTML = ` $${data.bitcoin.usd}`;
      priceEthereum.innerHTML = ` $${data.ethereum.usd}`;
      priceDogeCoin.innerHTML = ` $${data.
        dogecoin.usd}`;

      console.log(data);
    })
    .catch((err) => console.error(err));
};

// Call the dataFetch function to update the price
dataFetch();
