/*
ϟAdmin login serviceϟ
*/

//ϟcreate variablesϟ
const urlParams = new URLSearchParams(window.location.search); const urlusername = urlParams.get('username'); const urlpassword = urlParams.get('password');
document.write("Hey, " + urlusername + "! I'm still coding this part of the Admin site. Sorry.");

//hack prevention
var ca = sessionStorage.getItem('currentAccount'); var referrer = document.referrer;
if (referrer == '') {
  window.location.replace('https://www.piggame.co.uk/admin/login?source=loginsericewrongurl');
} else {
  if (ca == null) {
    sessionStorage.setItem('currentAccount', urlusername);
  } else {
    window.location.replace('https://www.piggame.co.uk/admin/login?source=loginsericeusernameinsessionstorage');
  }
}

//Head to admin home screen
window.location.replace('https://www.piggame.co.uk/admin/#homescreen');