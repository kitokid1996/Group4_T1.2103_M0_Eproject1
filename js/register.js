function    regex_name()
{
    var patt_name=/\D{5,}/;
    var value_name=document.getElementById("name").value;
    var result = patt_name.test(value_name);
    if(result==true)
    {
        document.getElementById("image_name").innerHTML = "<forn style='color: green;'>✔</forn>"
        document.getElementById("regex_name").innerHTML = "<forn style='color: green;'></forn>"
    }
    else
    {
        document.getElementById("image_name").innerHTML = "<forn style='color: red;'>✖</forn>"
        document.getElementById("regex_name").innerHTML = "<forn style='color: red;'>You can only enter letters</forn>"  
    }
    return false
}
// ----------------------------------------------------------------------------------------------------------------------
        function    regex_birth()
{
    var patt_birth=/^\d{4}\/\d{1,2}\/\d{1,2}$/;
    var value_birth=document.getElementById("birth").value;
    var result = patt_birth.test(value_birth);
    if(result==true)
    {
        document.getElementById("image_birth").innerHTML = "<forn style='color: green;'>✔</forn>"
        document.getElementById("regex_birth").innerHTML = "<forn style='color: green;'></forn>"
    }
    else
    {
        document.getElementById("image_birth").innerHTML = "<forn style='color: red;'>✖</forn>"
        document.getElementById("regex_birth").innerHTML = "<forn style='color: red;'>year/month/day (xxxx/xy/xy)</forn>"  
    }
    return false
}
// ----------------------------------------------------------------------------------------------------------------------
        function    regex_email()
{
    var patt_email=/\w{4,}@\w{3,}\.\w{2,}/;
    var value_email=document.getElementById("mail").value;
    var result = patt_email.test(value_email);
    if(result==true)
    {
        document.getElementById("image_mail").innerHTML = "<forn style='color: green;'>✔</forn>"
        document.getElementById("regex_mail").innerHTML = "<forn style='color: green;'></forn>"
    }
    else
    {
        document.getElementById("image_mail").innerHTML = "<forn style='color: red;'>✖</forn>"
        document.getElementById("regex_mail").innerHTML = "<forn style='color: red;'></forn>"  
    }
    return false
}
// ----------------------------------------------------------------------------------------------------------------------
        function    regex_phone()
{
    var patt_phone=/\d{10,12}/;
    var value_phone=document.getElementById("phone").value;
    var result = patt_phone.test(value_phone);
    if(result==true)
    {
        document.getElementById("image_phone").innerHTML = "<forn style='color: green;'>✔</forn>"
        document.getElementById("regex_phone").innerHTML = "<forn style='color: green;'></forn>"
    }
    else
    {
        document.getElementById("image_phone").innerHTML = "<forn style='color: red;'>✖</forn>"
        document.getElementById("regex_phone").innerHTML = "<forn style='color: red;'> </forn>"    
    }
    return false
}
function    regex_pass()
{
    var patt_pass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W].*){8,}/;
    var value_pass=document.getElementById("pass").value;
    var result = patt_pass.test(value_pass);
    if(result==true)
    {
        document.getElementById("image_pass").innerHTML = "<forn style='color: green;'>✔</forn>"
        document.getElementById("regex_pass").innerHTML = "<forn style='color: green;'></forn>"
    }
    else
    {
        document.getElementById("image_pass").innerHTML = "<forn style='color: red;'>✖</forn>"
        document.getElementById("regex_pass").innerHTML = "<forn style='color: red; font-size: 15px;'>At least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character and at least 8 characters</forn>"  
    }
    return false
}

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        function register()
        {
            var patt_name= /\D{5,}/;
            var value_name= document.getElementById("name").value;
            var result= patt_name.test(value_name);
            if(result == false)
            {
                alert("you have given the wrong name. please re-enter.");
                document.getElementById("name").focus();
                return false;
            }


            var patt_birth= /^\d{4}\/\d{1,2}\/\d{1,2}$/;
            var value_birth= document.getElementById("birth").value;
                result= patt_birth.test(value_birth);
            if(result == false)
            {
                alert("you have set wrong Date of Birth. please re-enter.");
                document.getElementById("birth").focus();
                return false;   
            }


            var patt_mail= /\w{6,}@\w{4,}\.\w{2,}/;
            var value_mail= document.getElementById("mail").value;
                result= patt_mail.test(value_mail);
            if(result == false)
            {
                alert("you have set wrong Email. please re-enter.");
                document.getElementById("mail").focus();
                return false;   
            }


            var patt_phone= /\d{10,12}/;
            var value_phone= document.getElementById("phone").value;
                result= patt_phone.test(value_phone);
            if(result == false)
            {
                alert("you have set wrong phone number. please re-enter.");
                document.getElementById("phone").focus();
                return false;
            }
            


        
            var patt_pass= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W].*){8,}/;
            var value_pass= document.getElementById("pass").value;
                result= patt_pass.test(value_pass);
            if(result == false)
            {
                alert("you have set the wrong password. Please re-enter.");
                document.getElementById("pass").focus();
                return false;
            }
            //----------------------------
            var  hob;
                    var hob1 = document.getElementsByName("hob");
                    for(var i in hob1 )
                    {
                        if(hob1[i].checked === true  )
                        {
                            hob= document.getElementsByName("hob")[i].value;
                        }
                    }

            var value_address= document.getElementById("address").value;

            confirm("This is your Info:\nYour name: "+value_name+"\nNumber Phone: "+value_phone.replace(/...$/, 'xxx')+"\nEmail: "+value_mail+"\nYour Address: "+value_address+"\nBirthday: "+value_birth+"\nGender: "+ hob)
            
            alert("You have successfully registered \nNumber Phone: "+value_phone.replace(/...$/, 'xxx')+" Is Your Login Code")
            
        }