let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);           // eval()it is a in built function
            input.value = string;

        }
      

        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);   // this extract portion of string starting from idx0 and ending right before string.length-1                      
            input.value = string;
        }

        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })

})


