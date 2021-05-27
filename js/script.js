function showTemp (){
    const getTemp = document.querySelector("#degree").value;
    document.querySelector(".result").innerHTML = getTemp * (9/5) + 32;
}
