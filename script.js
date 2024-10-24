(function() {
    emailjs.init(gWQ_WhSNQYpsC_KBW); // Replace with your EmailJS user ID

    document.getElementById('orderForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const templateParams = {
            name: document.getElementById('InputName1').value,
            phone: document.getElementById('InputPhoneNumber1').value,
            email: document.getElementById('InputEmail').value,
        };

        emailjs.send(service_lpwjisp, template_ecoqixs, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your order has been submitted successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send your order. Please try again later.');
            });
    });
})();
