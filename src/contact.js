let nameInput = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let form = document.getElementById("form1");

let banner = document.getElementById("succes");
form.addEventListener('submit', submit);
function submit(e){
    var nameInput = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("messageError");
    var banner = "Thank you for contacting us, " + nameInput + " ";
    var bannerElement= document.getElementById("succes");
    bannerElement.value = banner;
    
    error_message.style.padding = "10px";
    
    var text;
    if(nameInput.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      e.preventDefault();
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      e.preventDefault();
      return false;
    }
    if(message.length <= 7){
      text = "Please Enter More Than 7 Characters";
      error_message.innerHTML = text;
      e.preventDefault();
      return false;
    }
    bannerElement.className = 'display-show';
    bannerElement.innerHTML = `${banner} !`;
    e.preventDefault();
    return true;
}
