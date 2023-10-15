// Question 1

const fetch = require("node-fetch");

async function getCountryName(code) {
  let country = null;
  let page = 1;

  const response = await fetch(
    `https://jsonmock.hackerrank.com/api/countries?page=${page}`
  );
  const initialData = await response.json();
  const totalPages = initialData.total_pages;

  while (!country && page <= totalPages) {
    let currentPageData =
      page === 1
        ? initialData
        : await fetch(
            `https://jsonmock.hackerrank.com/api/countries?page=${page}`
          ).then((res) => res.json());

    const foundCountry = currentPageData.data.find(
      (elt) => elt.alpha2Code === code
    );
    if (foundCountry) {
      country = foundCountry.name;
    }
    page++;
  }

  return country;
}

async function getCountryName2(code) {
  let country = null;
  let counter = 0;
  while (!country) {
    let response = await fetch(
      `https://jsonmock.hackerrank.com/api/countries?page=${counter}`
    );
    let data = await response.json();

    data.data.find((elt) => {
      if (elt.alpha2Code === code) {
        country = elt.name;
      }
    });
    counter++;
  }

  return country;
}

// Question 2

function processOrderList(orderList, orderId, state) {
  if (state === "Processing") {
    const filter = orderList.filter((elt) => elt.id === orderId);
    if (filter.length === 1) {
      return `Order with id ${orderId} is in Processing state`;
    } else {
      return orderList;
    }
  } else if (state === "Delivered") {
    const filter = orderList.filter((elt) => elt.id === orderId);
    if (filter.length === 1) {
      return `Order with id ${orderId} is in Recieved state`;
    } else {
      return orderList;
    }
  } else {
    return orderList;
  }
}
