var objUsers = [
    {
        username:"Michal",
        password:"test"
    }
]

function singIn(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(var i = 0; i < objUsers.length; i++){
        if(username == objUsers[i].username){
            document.getElementById("usernameMessage").innerHTML = "";
            if(password == objUsers[i].password){
                document.getElementById("passwordMessage").innerHTML = "";
                window.location="logged.html";
            }
            else{
                document.getElementById("passwordMessage").innerHTML = "Incorrect password!";
            }
        }
        else{
            document.getElementById("usernameMessage").innerHTML = "Incorrect username!";
            document.getElementById("passwordMessage").innerHTML = "";
        }
    }
}

function singOut(){
    location.assign("index.html");
}
