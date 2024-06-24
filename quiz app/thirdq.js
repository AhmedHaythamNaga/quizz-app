document.addEventListener('DOMContentLoaded', function() {
    var radios = document.querySelectorAll('input[type="radio"][name="samegrp3"]');
    var form = document.getElementById('form3');
    var selectedValue3 = ''; 

    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue3 = radios[i].value;
                break;
            }
        }

        
        if (selectedValue3 !== '') {
            localStorage.setItem('selectedValue3', selectedValue3);
            window.location.href = 'fourthQ.html'; 
        } 
    });
});
