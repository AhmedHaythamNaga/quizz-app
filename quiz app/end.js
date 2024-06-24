var showResult = document.getElementById('showResult');

showResult.addEventListener("click", function(event) {
    let x = 0;
    var val1 = localStorage.getItem('selectedValue1');
    var val2 = localStorage.getItem('selectedValue2'); 
    var val3 = localStorage.getItem('selectedValue3');
    var val4 = localStorage.getItem('selectedValue4');

    
    if ( val1=== "Paris") {
        x++;
    }
    if (val2 === "Cairo") {
        x++;
    }
    if (val3 === "Kabul") {
        x++;
    }
    if (val4 === "Santiago") {
        x++;
    }

    let percentage = (x / 4) * 100;
    localStorage.setItem('percentage', percentage);
    
    if (percentage < 50) {
        window.location.href = "fail.html";
    } else {
        window.location.href = "success.html";
    }
});
