

// this function is for selecting seats from gold category
function place(bookedSeats){
$('.' + settings.seatCss).click(function () {
if ($(this).hasClass(settings.selectedSeatCss)){
    alert('This seat is already reserved');
}
else{
    $(this).toggleClass(settings.selectingSeatCss);
    }

});
 
$('#btnShowNew').click(function () {
    var str = [], item;
    $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
        item = $(this).attr('title');
        
        str.push(item);                  
    });
    // if the number of seats you selected are different from what you chose
     if(str.length!=seatsselected)
    { $("#total").text(" * You chose to book "+seatsselected+" seat(s)");
      $("#single").text("");
      $("#adjacent").text("");
      $.each($('.'+settings.selectingSeatCss), function (index, value) {
            $(this).toggleClass(settings.selectingSeatCss); 
      
    });
    }
    else 
    {
       //proceeds to check other conditions only if you have selected the amount of seats you specified
      $("#total").text("");
     
      adjacentseats(str,1,7,settings);
     adjacent(1,str,7,settings,bookedSeats);
    }
   
    
    if(($("#total").text()=="")&&($("#adjacent").text()=="")&&($("#single").text()==""))
      alert("Thanks "+ name+ " for booking your ticket");
})
};

// this function is for selecting seats from silver category
function silver(bookedSeats){

$('.' + settings2.seatCss).click(function () {
if ($(this).hasClass(settings2.selectedSeatCss)){
    alert('This seat is already reserved');
}
else{
    $(this).toggleClass(settings2.selectingSeatCss);
    }
});
 
$('#btnShowNew').click(function () {
    var str1 = [], item;
    $.each($('#bronze li.' + settings2.selectingSeatCss + ' a'), function (index, value) {
        item = $(this).attr('title');                
        str1.push(item);

    });
     // if the number of seats you selected are different from what you chose
    if(str1.length!=seatsselected)
    { $("#total").text("* You chose to book "+seatsselected+" seat(s)");
      $("#adjacent").text("");
     $("#single").text("");
      $.each($('.'+settings2.selectingSeatCss), function (index, value) {
            $(this).toggleClass(settings2.selectingSeatCss); 
       
    });
    }
    else 
    {
       //proceeds to check other conditions only if you have selected the amount of seats you specified
      $("#total").text("");
      adjacentseats(str1,22,4,settings2);
      adjacent(22,str1,4,settings2,bookedSeats);

    }

 if(($("#total").text()=="")&&($("#adjacent").text()=="")&&($("#single").text()==""))
      alert("Thanks "+ name+ " for booking your ticket");
})
};
// this function is for selecting seats from bronze category
function bronze(bookedSeats){

$('.' + settings3.seatCss).click(function () {
if ($(this).hasClass(settings3.selectedSeatCss)){
    alert('This seat is already reserved');
}
else{
    $(this).toggleClass(settings3.selectingSeatCss);
    }
});
 
$('#btnShowNew').click(function () {
    var str2 = [], item;
    $.each($('#silver li.' + settings3.selectingSeatCss + ' a'), function (index, value) {
        item = $(this).attr('title'); 
        str2.push()                 
        str2.push(item);                  
    });
     // if the number of seats you selected are different from what you chose
    if(str2.length!=seatsselected)
    { $("#total").text(" *You chose to book "+seatsselected+" seat(s)");
      $("#adjacent").text("");
      $("#single").text("");
      $.each($('.'+settings3.selectingSeatCss), function (index, value) {
            $(this).toggleClass(settings3.selectingSeatCss); 
       
    });
    }
    else 
    {
      //proceeds to check other conditions only if you have selected the amount of seats you specified
      $("#total").text("");

      adjacentseats(str2,34,6,settings3);
      adjacent(34,str2,6,settings3,bookedSeats);
    }
    
    
    if(($("#total").text()=="")&&($("#adjacent").text()=="")&&($("#single").text()==""))
      alert("Thanks "+ name+ " for booking your ticket");
})
};
// this function checks if you are creating single seat silos
function adjacent(num1,str1,num,settings,bookedSeats){
   var results = [];
   str1.sort();
   var count=0;
   var i=str1.length;
if((str1[0]-num1)%num==1)
   results.push(str1[0]-1);

   for(var i=0; i<str1.length;i++)
   {
    if((str1[i+1]-num1)%num==1&&(str1[i]-num1)%num!=0)
        results.push(str1[i+1]-1);
    if((str1[i+1]-num1)%num!=(num-1)&&(str1[i]-num1)%(num)==(num-2))
            results.push(+str1[i]+ +1);
   }
   // this to check if getting only option of getting consecutive seats is to leave single seat silos
   for(var j=1;j<i;j++)
     {

       count+=((str1[j]-str1[j-1]));
      
     }   
   if((num-str1.length==1)&&(count==(i-1)))
   {
      $("#single").text("");
    }
  else if(results.length>0&&str1.length<(settings.rows*settings.cols-bookedSeats.length)-1)
{

    
   $("#single").text("*Please do not create single seat silos");
    
     $.each($('.'+settings.selectingSeatCss), function (index, value) {
            $(this).toggleClass(settings.selectingSeatCss); 
        
    });
  }
  else
    $("#single").text("");
}

// this function checks if you are selecting adjacent seats
function adjacentseats(str1,num1,num,settings){
  
  str1.sort();
  if(str1.length>1)
  {

    var i=str1.length;
    var count=0;
    var sum=0;
    var to=0;
  
    // this below code is if two seats are consecutive in number but in different rows
     for(var k=0;k<i;k++)
     {
      if((str1[k]-num1)%num==(num-1)&&(str1[k+1]-num1)%num==0)
      {
        to++;
      }
     }
     // this checks if the seats are consecutive in number
     for(j=1;j<i;j++)
     {

       count+=((str1[j]-str1[j-1]));
      
     }   
     
     if(count>(i-1)||to>0)
     {
         $("#adjacent").text("* Please select adjacent seats");
        $.each($('.'+settings.selectingSeatCss), function (index, value) {
            $(this).toggleClass(settings.selectingSeatCss); 
        
    });
    }
    else
      $("#adjacent").text("");
  }
}
