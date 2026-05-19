const comicContainerEl = document.querySelector("#comic-container");
// const comicContainerEl = document.getElementById("comic-container");

const getcomicBtn = document.querySelector("#get-comic");

getcomicBtn.addEventListener("click", getComic);

const renderComic = (comicData) => {
  //   console.log(comicData);
  const { img, alt, title, year, month, day } = comicData;

  //   const date = new Date(year, month, day);
  const date = Temporal.PlainDate.from({
    year: Number(year),
    month: Number(month),
    day: Number(day),
  });
  //   console.log({ date });
  //   const formattedDate = Intl.DateTimeFormat("de-DE").format(date);
  //   console.log({ formattedDate });
  const formattedDate = date.toLocaleString("de-DE", {
    dateStyle: "medium",
  });

  const html = `
        <figure class="h-full">
          <img
            class="h-full w-full"
            src="${img}"
            alt="${alt}"
          />
          <figcaption class="flex justify-between contain-inline-size">
            <span>${title}</span>
            <time datetime="${year}-${month}-${day}">${formattedDate}</time>
          </figcaption>
        </figure>`;

  // comicContainerEl.insertAdjacentHTML("afterbegin", html);
  //   comicContainerEl.innerHTML += html
  comicContainerEl.setHTML(html);
};

const renderError = (message) => {
  comicContainerEl.replaceChildren();
  const html = `
  <p class="p-3 bg-slate-800 border border-b-red-500">${message}</p>
  `;
  //   comicContainerEl.insertAdjacentHTML("afterbegin", html);
  comicContainerEl.setHTML(html);
};

// fetch("https://xkcd-api-ridvanaltun.vercel.app/api/comics/random")
//   .then((antwort) => {
//     console.log("Aus dem fetch()");

//     // if (!antwort.ok) return Promise.reject(new Error("Not OK"));
//     if (!antwort.ok) throw new Error("Failed to fetch. Try again.");

//     return antwort.json();
//   })
//   .then((daten) => renderComic(daten))
//   .catch((err) => renderError(err.message))
//   .finally(() => {});

// * async/await
// hoisting
async function getComic() {
  //   comicContainerEl.innerHTML = "";
  comicContainerEl.replaceChildren();
  //    comicContainerEl.setHTMLUnsafe(html);
  getcomicBtn.disabled = true;

  try {
    const res = await fetch("https://xkcd-api-ridvanaltun.vercel.app/api/comics/random");
    console.log(res);
    if (!res.ok) throw new Error("Failed to fetch. Try again.");
    const data = await res.json();
    renderComic(data);
  } catch (err) {
    renderError(err.message);
  } finally {
    getcomicBtn.disabled = false;
  }
}

getComic();

console.log("console.log auf Zeile 58");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Im timeout");

//     if (Math.random() < 0.5) reject("FEHLSCHLAG");

//     resolve("ERFOLG");
//   }, 2000);
// });

// console.log(myPromise);
// myPromise.then((data) => console.log(data)).catch((err) => console.error(err));

// new Date(2025, 1, 9) // 9. Februar 2025
