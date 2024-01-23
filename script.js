function execute(button_text){
    console.log(button_text)
    // if ac is pressed 
    if (button_text=="AC"){

        console.log('test')

        // makethe text label to 0
        document.getElementById("label").innerHTML ='0'
}
    else if (button_text=='='){ 
         
        document.getElementById("label").innerHTML = eval(document.getElementById("label").innerHTML)
    } 

    else{

    // if label has only 0

    if (document.getElementById('label').innerHTML == '0'){

        // replace the 0 by button text 

        document.getElementById('label').innerHTML = button_text;    
    }

    // if label does not have only 0
    else{

        // attach the new button text with the existing label text
        document.getElementById('label').innerHTML += button_text;
    }
    }
}