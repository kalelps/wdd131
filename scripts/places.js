
document.addEventListener("DOMContentLoaded", () => {

  const lastModified = document.lastModified;
  document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

  document.getElementById("year").textContent = new Date().getFullYear();

  const tempC = 18;
  const windKmh = 14;

  function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
  }

  if (tempC <= 10 && windKmh > 4.8) {
    const windChill = calculateWindChill(tempC, windKmh);
    document.querySelector(".weather-box ul").insertAdjacentHTML(
      "beforeend",
      `<li><strong>Wind Chill:</strong> ${windChill} °C</li>`
    );
  }
});
