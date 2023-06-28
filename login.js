function iniciar(){

    var contr = 2670957;
    var user = "Juan";

    if(document.form.password.value == contr && document.form.login.value == user){

        alert("Has ingresado a lynna ¡Bienvenido!");
        window.location = "premium.html";
    }
    else
    {
        alert("Por favor ingresar el usuario y contraseña correcta.");
    }
}