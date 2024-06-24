document.addEventListener('DOMContentLoaded', function() {
    var radios = document.querySelectorAll('input[type="radio"][name="samegrp4"]');
    var form = document.getElementById('form4');
    var selectedValue4 = ''; 

    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue4 = radios[i].value;
                break;
            }
        }

        
        if (selectedValue4 !== '') {
            localStorage.setItem('selectedValue4', selectedValue4);
            window.location.href = 'results.html'; 
        } 
    });
});
