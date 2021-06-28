///////////////////////////////////////     Tính View      //////////////////////////////////////////
    if(localStorage.view)
    {
        localStorage.view++;
    }
    else{
         //set giá trị 
        localStorage.view = 1;
      
    }

    // lấy giá  trị
    $("#view-web").html(localStorage.view)
      
    

//////////////////////////////////////////   Đồng Hồ    ///////////////////////////////////////////////////
        var festivalTime = new Date(2021, 08, 28).getTime() + (1000*3600*6); // time next festival
        var days, hours, minutes, seconds; // variables for time units
        
        getCountdown();
        setInterval(function () { getCountdown(); }, 1000);
        function getCountdown(){
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (festivalTime - current_date) / 1000;

        days = pad( parseInt(seconds_left / 86400) );
        seconds_left = seconds_left % 86400;
            
        hours = pad( parseInt(seconds_left / 3600) );
        seconds_left = seconds_left % 3600;
            
        minutes = pad( parseInt(seconds_left / 60) );

        seconds = pad( parseInt( seconds_left % 60 ) );

        // print in html
        $("#day").html(days) ;
        $("#hour").html(hours) ;
        $("#minute").html(minutes) ;
        $("#second").html(seconds) ;
        }

        function pad(n) {
            return (n < 10 ? '0' : '') + n;
        }

/////////////////////////////////////    form footer1    /////////////////////////////////////
function footer1()
        {
            
            var value_name = $(".nameFooter").val();
            var value_mail = $(".emailFooter").val();
            var value_phone= $(".phoneFooter").val();
            
            
            if(value_name == "")
            {
                alert("you did not entered your name");
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
            else{
                confirm("Your information has been sent to us\nYour Name: "+value_name+"\nEmail: "+value_mail+"\nPhone: "+value_phone.replace(/...$/, 'xxx'))
            }
    }

//////////////////////////////////    Feedback    /////////////////////////////////////////////////////
    function feedback(){
        var  hobFeedback;
        var hobFeedbackValue = document.getElementsByName("hobF");
        for(var i in hobFeedbackValue )
        {
            if(hobFeedbackValue[i].checked === true  )
            {
                hobFeedback= document.getElementsByName("hobF")[i].value;
            }
        }
        if(hobFeedback == null)
        {
            alert("You haven't chosen your gender yet");
            return false;
        }

        var value_name = $(".name-feedback").val();
        var value_mail = $(".mail-feedback").val();
        var value_phone= $(".phone-feedback").val();
        var value_comment=$(".comment").val();
        
        
        if(value_name == "")
        {
            alert("you did not entered your name");
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
        else if(value_comment == "")
        {
            alert("You have not entered a comment yet");
            return false;
        }
        
            confirm("Your information has been sent to us\nYour Name: "+value_name+"\nGender: "+hobFeedback+"\nEmail: "+value_mail+"\nPhone: "+value_phone.replace(/...$/, 'xxx')+"\n\nYour Comment: \n"+ value_comment)
        
    }