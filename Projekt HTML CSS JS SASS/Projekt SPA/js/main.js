document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function (){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function (){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})

const createAppointment = (appointment) => {
    
    const appointmentMessage = document.querySelector('.appointment-text');

    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(resJSON => {
        console.log(resJSON);
        appointmentMessage.classList.add('send');
        appointmentMessage.innerText = 'Dziękujemy '+ resJSON.appointment.name +'. Zostałeś zapisany!';
    });
}

document.getElementById('appointment-form').addEventListener('submit', function(e){
    e.preventDefault();

    const appointmentMessage = document.querySelector('.appointment-text');
    let formFields = document.getElementsByClassName('form-field');
    let allFields = false;
    let appointment = {
        name: document.getElementById('first-name').value,
        email: document.getElementById('email-address').value,
        service: document.getElementById('seclect-services').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        message: document.getElementById('notes').value
    }

    for(let i = 0; i<formFields.length; i++) {
        if(formFields[1].value === ''){
            allFields = false;
            formFields[i].classList.add('error');
        } else { 
            allFields = true;
            formFields[i].classList.remove('error');
        }
    }

    if(allFields) {
        createAppointment(appointment);
    } else {
        appointmentMessage.classList.add('error');
        appointmentMessage.innerText = 'Wypełnij wymagane pola';
    }
    
})