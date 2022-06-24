class Auth{
    constructor(){
        document.querySelector("body").style.display="none";
        const auth = store.get("auth");
        const user = JSON.parse(store.getItem("user"))
        this.validateAuth(auth, user);
    }

    validateAuth(auth, user){
        if (auth!=1){
            window.location.replace("/");
        }else{
            document.querySelector("body").style.display="block";
            var span_username = document.querySelector("#username");
            span_username.innerHTML = user.username;
        }
    }

    logOut(){
        store.remove("user");
        store.remove("auth");
        window.location.replace("/");
    }
}