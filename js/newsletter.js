(function () {
    document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
        e.preventDefault();

        // Check for spam
        if(document.getElementById('js-validate-robot').value !== '') { return false }

        // Get url for mailchimp
        var url = this.action.replace('/post?', '/post-json?');

        // Add form data to object
        var data = '';
        var inputs = this.querySelectorAll('#js-form-inputs input');
        for (var i = 0; i < inputs.length; i++) {
            data += '&' + inputs[i].name + '=' + encodeURIComponent(inputs[i].value);
        }

        // Create & add post script to the DOM
        var script = document.createElement('script');
        script.src = url + data;
        document.body.appendChild(script);

        // Callback function
        var callback = 'callback';
        window[callback] = function(data) {

            // Remove post script from the DOM
            delete window[callback];
            document.body.removeChild(script);

            // Display response message
            // document.getElementById('js-subscribe-response').innerHTML = data.msg

            if (data.result === "success") {
                document.getElementById('js-subscribe-response').innerHTML = "Parabéns! O e-mail foi cadastrado e seu desconto já está disponível :)";
                $(".price").hide();
                $(".price-discount").show();
            }
            else if (data.result === "error") {
                document.getElementById('js-subscribe-response').innerHTML = "Houve um erro ao cadastrar este e-mail.<br>Tente novamente ou experimente outro endereço."
            }
            else {
                document.getElementById('js-subscribe-response').innerHTML = data.msg
            }
            
            
        };
    });
})();