

function userRegistation(){
    let name = document.getElementById("name").value;
    let email =  document.getElementById("email").value;
    let password= document.getElementById("password").value;

    let userData = document.getElementById("user_data");
    let alert = document.getElementById("alert");

    if(name.length>0 && password.length >=6 ){
        let userName = document.getElementById("uname");
        let userEmail = document.getElementById("uemail");
        let userPass = document.getElementById("upassword");

        userName.innerHTML = "Name is = "+name;
        userEmail.innerHTML = "Email is = "+ email;
        userPass.innerHTML =   "Password is = "+password;
        userData.style.display = 'block';
        setTimeout(reload, 5000);

    } else{
        alert.innerHTML = `<p class="alert alert-danger"> ${name} Please Fill The Input Fields </p>`
    }
}

function reload(){
    location.reload();
}