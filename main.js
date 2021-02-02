// pin matcher js code here

        function getPin(){
            const random = Math.random() * 10000;
            const pin = (random + '').split('.')[0];
            if(pin.length === 4){
                return pin;
            }
            else{
                return getPin();
            }
        }
        // display  generate pin
        function generatePin(){
            const pinInput = document.getElementById('pin');
            pinInput.value = getPin();
        }
        // handle calculator button event
        const buttonContainer = document.getElementById('digits-container');
        buttonContainer.addEventListener('click',function(event){
            const digit = event.target.innerText;
            if(isNaN(digit)){
                if(digit==="C"){
                    let typeInput=document.getElementById('typed-pin');
                    typeInput.value=" ";
                    }
                    
                //handle backspace
                //handle clear
            }
            else{
                const typeInput = document.getElementById('typed-pin');
                typeInput.value = typeInput.value + digit;
            }
        })
        //verify pin
        function verifyPin(){
            const pin = document.getElementById('pin').value;
            const typedPin = document.getElementById('typed-pin').value;
            if(pin === typedPin){
                const correct = document.getElementById('correctPin');
                correct.style.display = 'block';
                const incorrect = document.getElementById('incorrectPin');
                incorrect.style.display ='none';
            }
            else{
                const incorrect = document.getElementById('incorrectPin');
                incorrect.style.display ='block';
                const correct = document.getElementById('correctPin');
                correct.style.display = 'none';
            }
        }     