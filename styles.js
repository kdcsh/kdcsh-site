document.addEventListener("DOMContentLoaded", function () {
    const leadershipSection = document.getElementById("leadership");
    const leaders = document.querySelectorAll(".leader");

    function checkVisibility() {
        const rect = leadershipSection.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            leadershipSection.classList.add("visible");
            leaders.forEach((leader, index) => {
                setTimeout(() => {
                    leader.classList.remove("move-left", "move-right");
                }, index * 100);
            });
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
    var modal1 = document.getElementById("myModal1");
    var btn1 = document.getElementById("myBtn1");
    var span1 = modal1.getElementsByClassName("close")[0];

    btn1.onclick = function() {
        modal1.style.display = "block";
    };
    span1.onclick = function() {
        modal1.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    };
    
    var modal2 = document.getElementById("myModal2");
    var btn2 = document.getElementById("myBtn2");
    var span2 = modal2.getElementsByClassName("close")[0];

    btn2.onclick = function() {
        modal2.style.display = "block";
    };
    span2.onclick = function() {
        modal2.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    };
});