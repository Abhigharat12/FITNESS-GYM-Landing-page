
    document.addEventListener("DOMContentLoaded", function () {
        var countDownDate = new Date().getTime() + (24 * 60 * 60 * 1000);

        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Added semicolon here
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var demoElement = document.getElementById("demo");
            if (demoElement) {
                demoElement.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
            }

            if (distance < 0) {
                clearInterval(x);
                if (demoElement) {
                    demoElement.innerHTML = "EXPIRED";
                }
            }
        }, 1000);
    });

ss
