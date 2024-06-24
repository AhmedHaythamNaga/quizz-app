document.addEventListener('DOMContentLoaded', function() {
    var radios = document.querySelectorAll('input[type="radio"][name="samegrp2"]');
    var form = document.getElementById('form2');
    var selectedValue2 = ''; 

    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue2 = radios[i].value;
                break;
            }
        }

        
        if (selectedValue2 !== '') {
            localStorage.setItem('selectedValue2', selectedValue2);
            window.location.href = 'thirdQ.html'; 
        } 
    });
});
