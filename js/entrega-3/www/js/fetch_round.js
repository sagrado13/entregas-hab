"use strict";

async function converter(euros) {
  const requestData = await fetch(
    `https://api.exchangerate-api.com/v4/latest/EUR`
  );
  const dataEur = await requestData.json();
  const usd = euros * dataEur.rates.USD;
  console.log(
    `A ${dataEur.date} el valor de ${euros}€ equivale a ${
      Math.round(usd * 1000) / 1000
    }$.`
  );
  const dataUsd = await (
    await fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
  ).json();
  const jpy = usd * dataUsd.rates.JPY;
  console.log(
    `A ${dataUsd.date} el valor de ${usd}$ equivale a ${
      Math.round(jpy * 1000) / 1000
    }¥.`
  );
}

converter(10);
