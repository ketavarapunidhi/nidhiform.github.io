
var row=1;
var submit=document.getElementById("submit");
submit.addEventListener("click", displayDetails);



function displayDetails(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;
    var tc = document.getElementById("tc").checked;
    var age = Age(dob);
    if (age < 18 || age > 55) {
        alert("Not eligible as age is not between 18 and 55");
        return false;
    }

    function Age(dob) {
        var pday = new Date();
        var bday = new Date(dob);
        var age = pday.getFullYear() - bday.getFullYear();
        var m = pday.getMonth() - bday.getMonth();
        if (m < 0 || (m === 0 && pday.getDate() < bday.getDate())) {
            age--;
          }
        return age;
    }
    

    var userdata = document.getElementById("userdata");
    var newRow= userdata.insertRow(row);
    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);

    cell1.innerHTML=name;
    cell2.innerHTML=email;
    cell3.innerHTML=password;
    cell4.innerHTML=dob;
    cell5.innerHTML=tc;

    row++;
    event.preventDefault();
}