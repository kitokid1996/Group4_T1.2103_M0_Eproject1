
    if(localStorage.counter)
    {
        localStorage.counter++;
    }
    else{
         //set giá trị cho  key counter
        
        localStorage.counter = 1;
    }


    // lấy giá  trị từ key counter
    $(".view_web")  .html(localStorage.counter);