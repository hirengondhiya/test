fetch("/api")
  .then((res) => res.json())
  .then((result) => {
    renderResult(result);
  })
  .catch((err) => console.error(err));

function renderResult(result) {
  const resultElem = document.getElementById("result");
  console.log(resultElem);
  if (resultElem && Array.isArray(result)) {
    resultElem.innerHTML = "";
    result.forEach((lineItem) => {
      const p = document.createElement("p");
      p.innerText = lineItem;
      resultElem.appendChild(p);
    });
  }
}
