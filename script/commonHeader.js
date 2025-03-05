
function loadGoogleAnalytics() {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-9RVHF42WJ0";
    document.head.appendChild(script);

    script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', 'G-9RVHF42WJ0');
    };

    document.currentScript.remove();
}

// Call the function to load Google Analytics
loadGoogleAnalytics();
