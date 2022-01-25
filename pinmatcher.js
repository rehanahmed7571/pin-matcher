
                // default value
                document.getElementById('calculatorDisplay').value= '';
                document.getElementById('randomNumberDisplay').value='';

                //random number 

                function getNumber(){
                 
                    let tapButton = document.getElementById('generateButton')
                    let  randomNumber =Math.round( Math.random() * 10000) ;
                    if(randomNumber < 100){
                        randomNumber= randomNumber * 100;
                        document.getElementById('randomNumberDisplay').value=randomNumber;
                    }
                    else if(randomNumber < 1000){
                        randomNumber= randomNumber * 10;
                        document.getElementById('randomNumberDisplay').value=randomNumber;
                        
                    }else{
                        document.getElementById('randomNumberDisplay').value=randomNumber;
                    }
                     
                };

       

            // back function 
            function back(){
                let chopping = document.getElementById('calculatorDisplay').value;
                let nextHappened = chopping.slice(0,-1);
                console.log(nextHappened);
                document.getElementById('calculatorDisplay').value=nextHappened;
            }
            
            // check amount of number
            
            function check(){
                let amountNumber = document.getElementById('calculatorDisplay').value;
                let takeNumber = amountNumber.length;
           
                if(takeNumber >= 4){
                    let cols = document.querySelectorAll('.disableNumber');

                    for(i = 0; i < cols.length; i++) {
                            cols[i].style.pointerEvents="none";
                        }
                                        
                }else{
                    let cols = document.querySelectorAll('.disableNumber');

                    for(i = 0; i < cols.length; i++) {
                            cols[i].style.pointerEvents="auto";
                        }
                }
            };
            
            



            // pin match check 

            function checkNumber(){
                let currentNumberRandom = document.getElementById('randomNumberDisplay').value;
                let currentNumber = document.getElementById('calculatorDisplay').value;
              
                if (currentNumberRandom == currentNumber){
                    document.getElementById('notifyRight').style.display="block";
                    document.getElementById('notifyCross').style.display="none";
                    
                }else{
                    document.getElementById('notifyCross').style.display="block";
                    document.getElementById('notifyRight').style.display="none";
                    
                };

            };
