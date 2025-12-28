function searchLocation(){
    let place=document.getElementById("locationInput").value;
    if(place.trim()===""){
        alert("please enter a location");
        return;
    }
    let query=place.replace(/ /g,"+");
    document.getElementById("mapFrame").src="https://www.google.com/maps?q="+query+"&output=embed";

}