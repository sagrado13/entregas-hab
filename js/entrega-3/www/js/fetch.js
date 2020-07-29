"use strict";

async function converter(euros) {
  const requestData = await fetch(
    `https://api.exchangerate-api.com/v4/latest/EUR`
  );
  const dataEur = await requestData.json();
  const usd = euros * dataEur.rates.USD;
  console.log(`A ${dataEur.date} el valor de ${euros}€ equivale a ${usd}$.`);
  const dataUsd = await (
    await fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
  ).json();
  const jpy = usd * dataUsd.rates.JPY;
  console.log(`A ${dataUsd.date} el valor de ${usd}$ equivale a ${jpy}¥.`);
}

converter(10);
