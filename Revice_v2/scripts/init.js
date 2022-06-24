const auth = new Auth();

el=document.querySelector(".logout")

if(el){
    el.addEventListener("click",  (e)=>{
        auth.logOut();
    });
}