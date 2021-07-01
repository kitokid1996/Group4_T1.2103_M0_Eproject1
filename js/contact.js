function Contact(){
    var  hobContact;
    var hobContactValue = document.getElementsByName("hobContact");
    for(var i in hobContactValue )
    {
        if(hobContactValue[i].checked === true  )
        {
            hobContact= document.getElementsByName("hobContact")[i].value;
        }
    }
    if(hobContact == null)
    {
        alert("You haven't chosen your gender yet");
        return false;
    }

    var value_name = $("#nameContact").val();
    var value_mail = $("#mailContact").val();
    var value_phone= $("#phoneContact").val();
    var value_address=$("#addressContact").val();
    
    if(value_name == "")
    {
        alert("you did not entered your name");
        return false;
    }    
    else if(value_address == "")
    {
        alert("you have not entered your address");
        return false;
    }
        else if(value_mail == "")
    {
        alert("you did not enter your email");
        return false;
    }
        
        else if(value_phone == "")
    {
        alert("you have not entered your number phone");
        return false;
    }
    
    
        confirm("Your information has been sent to us\nYour Name: "+value_name+"\nGender: "+hobContact+"\nEmail: "+value_mail+"\nPhone: "+value_phone.replace(/...$/, 'xxx')+"\nYour Address: \n"+ value_address)
    
}