
    var body = document.querySelector('body');

    // function aTagColor(setColor){
    //   var aTag = document.getElementsByTagName('a');
    //   for(var indexNum=0;indexNum<aTag.length;indexNum++){
    //     aTag[indexNum].style.color = setColor;
    //   }      
    // }

    var Acolor = {
      aTagColor : function(setColor){
        var aTag = document.querySelectorAll('a');
        for(var indexNum=0;indexNum<aTag.length;indexNum++){
          aTag[indexNum].style.color = setColor;
        } 
      }
    }




    // function btnVal(btnTxt){
    //   var btn = document.getElementsByClassName('nightday_btn');
    //   for(var indexNum=0;indexNum<btn.length;indexNum++){
    //     btn[indexNum].value = btnTxt;
    //   }
    // }

    var Btn = {
      btnVal : function(btnTxt){
        var btn = document.querySelectorAll('input');
        for(var indexNum=0;indexNum<btn.length;indexNum++){
          btn[indexNum].value = btnTxt;
        }
      }
    }


    // function bodyBgColor(backColor){
    //   body.style.backgroundColor = backColor;
    // }

    // function bodyColor(setColor){
    //   body.style.color = setColor;
    // }

    var Body={
      bodyBgColor : function(backColor){body.style.backgroundColor = backColor;},
      bodyColor :  function(setColor){body.style.color = setColor;}
    }


    function nightDayHandler(self){    
      Nightday.nightDayHandler(self) ;
    }

    var Nightday = {
      nightDayHandler : function(self){
        if(self.value == 'night'){
          Body.bodyBgColor('black');
          Body.bodyColor('white');
          Btn.btnVal('day');
          Acolor.aTagColor('powderblue');
        }else{
          Body.bodyBgColor('white');
          Body.bodyColor('black');
          Btn.btnVal('night');
          Acolor.aTagColor('blue');
        }  
      }
    }
