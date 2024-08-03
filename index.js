if ("geolocation" in navigator) {
    function findStore() {
        document.getElementById("loader").style.display = "block";
        navigator.geolocation.getCurrentPosition(
            function(position) {
                document.getElementById("loader").style.display = "none";
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                
                const searchUrl = "https://www.google.com/maps/embed/v1/search?q=pet+stores&key=AIzaSyCtgShk_-CRMGCLFTkHuIET79DMNS5jCls&center=" + latitude + "," + longitude + "&zoom=13";

                document.getElementById("map").src = searchUrl;
                document.getElementById("mapContainer").style.display = "block";
                document.getElementById("mapContainer").scrollIntoView({ behavior: 'smooth', block: 'center' });
            },
            function(error) {
                document.getElementById("loader").style.display = "none";
                console.error("Geolocation permission denied or error:", error);
            }
        );
    }
    document.getElementById("findStoreButton").addEventListener("click", findStore);
} else {
    console.error("Geolocation is not supported.");
}

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back \uD83D\uDE14";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})

function scrollToSection() {
    var section = document.getElementById('locate');
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection1() {
    var section = document.getElementById('shop');
    section.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection2() {
    var section = document.getElementById('shop1');
    section.scrollIntoView({ behavior: 'smooth' });
}


