document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('one');

    button.addEventListener('click', function(event){
        event.preventDefault();

        const name=document.getElementById("name").value;
        const fatherName=document.getElementById("father").value;
        const motherName=document.getElementById("mother").value;
        const mobile=document.getElementById("mobile").value;
        const email=document.getElementById("email").value;
        
        if(!name|| !fatherName || !motherName || !mobile || !email){
            alert('Please fill all the fields');
            return;
        }
        console.log('Name:',name);
        console.log('Father Name:', fatherName);
        console.log('Mother Name:', motherName);
        console.log('Mobile No:',mobile);
        console.log('Email:', email);

        alert('form submitted successfully');
    });
});