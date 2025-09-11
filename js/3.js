
const ref = document.getElementById('demo');
document.getElementById('btn').addEventListener('click', () => {
    console.log("clicked");
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showloction)
    } else {
        ref.innerHTML = "error";
    }
});

function showloction(poistion){
    ref.innerHTML = `laitude : ${poistion.coords.latitude} <br/> longitude: ${poistion.coords.longitude}`
    const mapUrl = `https://maps.google.com/maps?q=${poistion.coords.latitude},${poistion.coords.longitude}&z=15&output=embed`;
    document.getElementById('mapFrame').src = mapUrl;
}