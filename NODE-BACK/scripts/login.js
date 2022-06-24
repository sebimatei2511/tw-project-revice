class Login{
    constructor(form, fields){
        this.form=form;
        this.fields=fields;
        this.validateOnSubmit();
    }

    validateOnSubmit(){
        let self =this;
        var error=0;

        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
            });
            if (error==0){
                var data = {
                    username: document.querySelector('#username').value,
                    password: document.querySelector('#password').value,
                };

                fetch("//localhost/login_API/users/auth",{
                    method: "POST",
                    body: JSON.stringify(data),
                    header: {
                        "Content-type": "application/json; charset=UTF-8",   
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if(data.error){
                            console.error("Error", data.message);
                            document.querySelector(".error-message-all").style.display = "block";
                            document.querySelector(".error-message-all").style.color = "black";
                            document.querySelector(".error-message-all").innerText = "Your password or username is incorrect.";
                        }else{
                            localStorage.setItem("user", JSON.stringify(data));
                            localStorage.setItem("auth",1);
                            this.form.submit();
                        }
                    })
                    .catch((data)=> {
                        console.error("Error:", data.message);
                    })

            }
        });
    }
}

const form = document.querySelector(".loginForm");
if (form){
    const fields = ["username", "password"];
    const validator = new Login(form, fields);
}

