'use strict';

const getCountryData = country => {
  const btn = document.querySelector('.btn-country');
  const countriesContainer = document.querySelector('.countries');

  ///////////////////////////////////////

  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `   <article class="country">
  <img class="country__img" src="${data.flags.png}"/>
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${
      data.languages.deu || data.languages.por || data.languages.hin
    }</p>
    <p class="country__row"><span>💰</span>${
      data.currencies.EUR?.name ?? data.currencies.INR.name
    }</p>
  </div>
</article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('india');
getCountryData('germany');
