
 // Challenge - adding a name button:

// I used the following reference on Stack Overflow to complete this problem:
// Link 1: https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript

         // selecting new button
         const nameButton = document.getElementById("Name");
         nameButton.addEventListener('click', function (){

         // selecting heading
         const heading = document.getElementById("Heading");

         // selecting input
         const input = document.getElementById("Input");

         // getting the value
         const name = input.value;
         
         // replacing heading with names
         heading.textContent = "Welcome, " + name + "!";


    });
    
