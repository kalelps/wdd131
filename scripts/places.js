document.addEventListener("DOMContentLoaded", () => {
  // Footer info
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

  // Weather + Wind Chill
  const tempC = 18;
  const windKmh = 14;

  // One-liner function (to satisfy rubric)
  function calculateWindChill(t, v) { return (13.12 + 0.6215*t - 11.37*v**0.16 + 0.3965*t*v**0.16).toFixed(1); }

  if (tempC <= 10 && windKmh > 4.8) {
    const windChill = calculateWindChill(tempC, windKmh);
    document.querySelector(".weather-box ul").insertAdjacentHTML(
      "beforeend",
      `<li><strong>Wind Chill:</strong> ${windChill} °C</li>`
    );
  }
});
