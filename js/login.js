function    regex_name()
    {
        var patt_name=/^\D{5,}$/;
        var value_name=document.getElementById("username").value;
        var result = patt_name.test(value_name);
        if(result==true)
        {
            document.getElementById("image_name").innerHTML = "<forn style='color: green;'>✔</forn>"
            document.getElementById("regex_name").innerHTML = "<forn style='color: green;'>Bạn đã nhập dúng</forn>"
        }
        else
        {
            document.getElementById("image_name").innerHTML = "<forn style='color: red;'>✖</forn>"
            document.getElementById("regex_name").innerHTML = "<forn style='color: red;'>Bạn chỉ được nhập chữ</forn>"  
        }
        return false
    }
// ----------------------------------------------------------------------------------------------------------------------

    function login()
        {
            var username =  document.getElementById("username").value;
            var pass     = document.getElementById("pass").value;
            var usernamed= "bla bla các kiểu";  // khúc này lấy getItem bên đăng  ký
            var passed   = "blu blu các kiểu"; // cũng vậy

            if(username==usernamed && pass==passed)
            {
                alert("bạn đã đăng nhập thành công");
                return false;
            }   
            else
            {
                alert("username hoặc mật khẩu của bạn không đúng")
            //   ----------------------------------------------------------------------------------------------------
                if(sessionStorage.counter)
                {
                    sessionStorage.counter++;
                }
                else{
                    //set giá trị cho  key counter
                    sessionStorage.counter =1;
               
                }

                // lấy giá  trị từ key counter
                document.getElementById("note").innerHTML ="bạn đã nhập sai " + sessionStorage.counter + " lần";
            }
            if(sessionStorage.counter==5)
            {
                alert("mày éo phải chủ  nick. \n CÚTTTTT !!!!!")
                window.close();
                return false;
            } 
            
        }      