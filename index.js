import "./index.css";

const cookieConsent = document.querySelector(".cookie-consent");
const cookieConsentButton = document.querySelector(".cookie-consent__button");

cookieConsentButton.addEventListener("click", () => {
  localStorage.setItem("cookie", "received");
  cookieConsent.remove();
});

const cookieStatus = localStorage.getItem("cookie");

if (cookieStatus === "received") {
  cookieConsent.remove();
}
