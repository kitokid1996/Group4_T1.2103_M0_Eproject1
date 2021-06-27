// tạo ra 1 JSON để chứa tất cả các festival ở châu á
//------------------------------------------     khởi tạo data      --------------------------------------------------------
var festiva =  [
    {
        "id"        :"01",
        "season"    :"spring",
        "hot"       :"yes",
        "caption"   :"<h4 class='name-Festival'>lễ hội đèn trời</h4><p></p>",
        "name"      :"<h2 class='name-Festival'>Haqrbin Snow Festival</h2>",
        "meaning"   :"<h3 class='title-Festival'>The Meaning of the Harbin Snow Festival</h3><p>The festival dates back to Harbin's traditional ice lantern show and winter garden party, which began in 1963. It was interrupted for a number of years during the Cultural Revolution, but was resumed when an annual event at Zhaolin Park was announced on January 5, 1985.</p><p>In 2001, the Harbin Ice Festival was merged with the Heilongjiang International Ski Festival and had a new official name, the Harbin International Ice and Snow Sculpture Festival.</p><img src='../images/event/spring/Harbin Snow Festival/03.jpg'>", 
        "time"      :"<h3 class='title-Festival'>Harbin Snow Festival time</h3><p>In 2015, the 31st Harbin Ice and Snow Festival opened on January 5 with the theme 'Harbin Ice, the Chinese Dream captivates around the world [' with the opening ceremony, fireworks display. , ice lanterns, birthday parties, snow sculpture competitions and exhibitions, as well as winter swimming, winter fishing, group weddings, fashion shows, concerts, ice sports games from December 22, 2014 to the beginning of March 2015.</p>",  
        "address"   :"<h3 class='title-Festival'>Harbin Snow Festival venues</h3><p>Harbin Snow Festival is an annual festival in the city of Harbin that is one of the four largest snow and ice festivals in the world along with the Sapporo Snow Festival, the Québec City Winter Carnival and the Norwegian Ski Festival. The festival was first held in 1963 and was interrupted for several years during the Cultural Revolution, then restored in 1985.</p> <img src='../images/event/spring/Harbin Snow Festival/04.jpg' alt=''>",
        "content"   :"<p>The Harbin Ice and Snow Festival is an annual event, but this year was a bit more special as 43 couples on this occasion held a mass wedding themed on snow and ice at the festival in Heilongjiang city, this northeastern part of China.</p><p>The Harbin Ice and Snow Festival, with its glittering castles and magical ice-sculpted scenes, has drawn millions of tourists over the years to one of China's coldest cities.</p><img src='../images/event/spring/Harbin Snow Festival/02.jpg' alt=''><img src='../images/event/spring/Harbin Snow Festival/01.jpg' alt=''><img src='../images/event/spring/Harbin Snow Festival/07.jpg' alt=''><p>The works at the festival are created from about 170,000m<sup>3</sup> of ice taken from the Songhua River.</p><p>More than 100 workers worked hours on ice every day for weeks before the opening of the festival to create beautiful ice sculptures.</p><img src='../images/event/spring/Harbin Snow Festival/06.jpg' alt=''><img src='../images/event/spring/Harbin Snow Festival/05.jpg' alt=''>"
    },
    // 1 lễ hội
    {
        "id"        :"a1",
        "season"    :"autumn",
        "hot"       :"yes",
        "caption"   :"<h4 class='name-Festival'>The Mid-Autumn Festival (Moon Festival)</h4><p></p>",
        "name"      :"<h2 class='name-Festival'>The Mid-Autumn Festival (Moon Festival)</h2>",
        "meaning"   :"",
        "time"      :"",  
        "address"   :"", 
        "content"   :"<h3 class='title-Festival'>What is The Mid-Autumn Festival ?</h3><p>Also known as the Chinese Moon Festival but more often called the \"Mooncake Festival\" by travelers, the Mid-Autumn Festival is an annual harvest celebration. The event is observed throughout Asia; Taiwan and Hong Kong observe the Mid-Autumn Festival as a public holiday. The Moon Festival is a very commercialized event with, you guessed it, many types of mooncakes for sale.</p><p class='title-Festival'>Aside from buying mooncakes, the Mid-Autumn Festival is about enjoying a brief respite from work to have reunions with family, friends, and loved ones. Mooncakes are exchanged with someone special.</p><p class='title-Festival'>Perhaps unfairly, mooncakes could be called Asia's answer to Christmas fruitcakes. They make cute gifts, but whether or not the dense, high-calorie little cakes get eaten or not—that's another story.</p><p class='title-Festival'>Commercialization hit this fall festival hard: Some of the mooncakes for sale are made from exotic ingredients (gold leaf, anyone?) and can cost hundreds of dollars. Beijing's taxation on mooncakes received created outcry and controversy—some mooncakes are so luxurious they are considered taxable income!</p><h3 class='title-Festival'>When?</h3><p>Usually in September but sometimes October.</p><h3 class='title-Festival'>Where?</h3><p>The epicenter is China, but the festival is observed throughout Asia</p><img  src='https://www.tripsavvy.com/thmb/3622fQVctGICGD0xHDxeGqmU3as=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yi-peng-festival-thailand-e5c078e167d849d998d0eabe9deed923.jpg' alt=''><p></p><img src='' alt=''>"
    },
    
];

// --------------------------------------------  Phân phối Data  -------------------------------------------------------
// tạo biến để lưu trữ các festival trong mỗi mùa
var spring = " ";
var summer = " ";
var autumn = " ";
var winter = " ";


    //  for statement to prints all data in variable festival
    for (var i of festiva) 
    {
        switch(i.season)    // dùng switch để lộc theo từng mùa
        {
            case "spring":
            {   //dùng các biến đã tạo ở trên để lưu trữ các festival của từng mùa
                spring +='<div >'    + i.name + '</div>' + 
                '<div class="meaning-Festival">'    + i.meaning + '</div>' +
                '<div class="time-Festival">'      + i.time + '</div>'+
                '<div class="address-Festival">'   + i.address + '</div>'+
                '<div class="content-Festival">'       + i.content + '</div}>'
                break;
            }
            case "summer":
            {
                summer +='<div >'    + i.name + '</div>' + 
                '<div class="meaning-Festival">'    + i.meaning + '</div>' +
                '<div class="time-Festival">'      + i.time + '</div>'+
                '<div class="address-Festival">'   + i.address + '</div>'+
                '<div class="content-Festival">'       + i.content + '</div}>'
                break;
            }
            case "autumn":
            {
                autumn +='<div >'    + i.name + '</div>' + 
                '<div class="meaning-Festival">'    + i.meaning + '</div>' +
                '<div class="time-Festival">'      + i.time + '</div>'+
                '<div class="address-Festival">'   + i.address + '</div>'+
                '<div class="content-Festival">'       + i.content + '</div}>'
                break;
            }
            case "winter":
            {
                winter +='<div >'    + i.name + '</div>' + 
                '<div class="meaning-Festival">'    + i.meaning + '</div>' +
                '<div class="time-Festival">'      + i.time + '</div>'+
                '<div class="address-Festival">'   + i.address + '</div>'+
                '<div class="content-Festival">'       + i.content + '</div}>'
                break;
            }
            default:
                {
                    break;
                }
        }
    }
    
// cuối cùng là in chúng ra từng trang web con
$("#spring").html(spring);
$("#summer").html(summer);
$("#autumn").html(autumn);
$("#winter").html(winter);


// hàm dùng cho trang event
function festivalCall(x)
{
    var festivalEvent = " ";
    for (var i of festiva) 
    {  
      if(i.name == "<h2 class='name-Festival'>"+x+"</h2>")
      {
        festivalEvent ='<div >'    + i.name + '</div>' + 
        '<div class="meaning-Festival">'    + i.meaning + '</div>' +
        '<div class="time-Festival">'      + i.time + '</div>'+
        '<div class="address-Festival">'   + i.address + '</div>'+
        '<div class="img-Festival">'       + i.content + '</div}>'
        break;
      }
    }

    $("#showFestival").html(festivalEvent);
            
}
var Gallery =" ";
for (var i of festiva) 
    {  
        Gallery +='<div class="img-Festival">'       + i.img + '</div}>'
    }

    $("#Gallery").html(Gallery);


