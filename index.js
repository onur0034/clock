let karsilama = prompt("kullanıcı adınızı girin : ");
let isim = document.querySelector("#myName");
isim.innerHTML = `${karsilama}`;



function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("myClock").innerHTML = `${h} : ${m} : ${s}`;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
