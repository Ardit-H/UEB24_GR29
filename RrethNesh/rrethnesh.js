function sendMail(){
  let parms = {
    name : document.getElementById("first-name").value,
    lastname : document.getElementById("last-name").value,
    phone : document.getElementById("phone").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
    ID : document.getElementById("ID").value,
   
  }
emailjs.send("service_zv6fa36","template_45ygsqv",parms).then(alert("Email sent !"))
}