let cookie = document.getElementById("cookie");
let info = document.getElementById("info");
let autoclicker = document.getElementById("autoclicker");

let cookies = 0;

const change = () => {
  cookies++;
  info.innerText = `Cookies: ${cookies}`;
};

cookie.onclick = change;

let cost = 20;
let interval;

const autoclickerBuy = () => {

    if (cookies >= cost) {
        cookies -= cost;
        info.innerText = `Cookies: ${cookies}`;
        interval = setInterval(change, 1000);
        autoclicker.style.display = "none";
    }

}

autoclicker.onclick = autoclickerBuy;
