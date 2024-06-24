document.addEventListener('DOMContentLoaded', function() {
    var radios = document.querySelectorAll('input[type="radio"][name="samegrp"]');
    var form = document.getElementById('form1');
    var selectedValue1 = ''; 

    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selectedValue1 = radios[i].value;
                break;
            }
        }

        
        if (selectedValue1 !== '') {
            localStorage.setItem('selectedValue1', selectedValue1);
            window.location.href = 'secondQ.html'; 
        } 
    });
});
