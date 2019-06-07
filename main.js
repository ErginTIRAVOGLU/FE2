/*var tl = new TimelineMax();


    tl.from('section.sliders .hTitleBorder', 1.4, {
        left: 0,
        opacity:0,
        ease : Power3.easeInOut
     }, 0.2);

     
     tl.from('section.sliders .sTitleBorder', 1.4, {
        left: 0,
        opacity:0,
        ease : Power3.easeInOut
      }, 0.4);

      tl.from('section.sliders .hButton1', 1.4, {
        left: 0,
        opacity:0,
        ease : Power3.easeInOut
      }, 0.6);

      tl.from('section.sliders .hCount1', 1.4, {
        left: 0,
        opacity:0,
        ease : Power3.easeInOut
      }, 0.8);
     
      tl.to('section.sliders .thumb1', 1.4, {
        left: 0,
        opacity:1,
        ease : Power3.easeInOut
      }, 1.0);
*/
var currentSlideCount = 0;
var slideCount = 3;

$("#solaGit").click(function (e) { 
  e.preventDefault();
  var tl = new TimelineMax();



  currentSlideCount=currentSlideCount+1;
 
  if(currentSlideCount>=slideCount)
  {
    currentSlideCount=0;
  }

  console.log("currentSlideCount : " + currentSlideCount);
  console.log('section.sliders .hButton' + (currentSlideCount + 1));
  for (var index = 0; index < 3; index++) {
    console.log("index : " + index);
    $('section.sliders .hButton' + (index + 1)).fadeOut();
    if(index == currentSlideCount)
    {
      $('section.sliders .hButton' + (index + 1)).fadeIn();
      /*tl.to('section.sliders .hButton' + (currentSlideCount + 1) , 1.4, {
        visibility : 'visible',
        ease : Power3.easeInOut
      }, 0);*/
    }
    else
    {
      
      /*tl.to('section.sliders .hButton' + (currentSlideCount + 1) , 1.4, {
        visibility : 'hidden',
        ease : Power3.easeInOut
      }, 0);*/
    }
 
    
  }

  tl.to('section.sliders .wide1', 1.4, {
    left: (-($('section.sliders .wide1').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .wide2' , 1.4, {
    left: (-($('section.sliders .wide2').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .wide3' , 1.4, {
    left: (-($('section.sliders .wide3').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  
  
  

  tl.to('section.sliders .thumb1', 1.4, {
    left: (-($('section.sliders .thumb1').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .thumb2' , 1.4, {
    left: (-($('section.sliders .thumb2').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .thumb3' , 1.4, {
    left: (-($('section.sliders .thumb3').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);



  tl.to('section.sliders .hCount1', 1.4, {
    left: (-($('section.sliders .hCount1').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .hCount2' , 1.4, {
    left: (-($('section.sliders .hCount2').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .hCount3' , 1.4, {
    left: (-($('section.sliders .hCount3').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);


  tl.to('section.sliders .fTitle1', 1.4, {
    top: (-($('section.sliders .fTitle1').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .fTitle2' , 1.4, {
    top: (-($('section.sliders .fTitle2').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .fTitle3' , 1.4, {
    top: (-($('section.sliders .fTitle3').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);



  tl.to('section.sliders .sTitle1', 1.4, {
    top: (-($('section.sliders .sTitle1').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .sTitle2' , 1.4, {
    top: (-($('section.sliders .sTitle2').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .sTitle3' , 1.4, {
    top: (-($('section.sliders .sTitle3').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  

  /*
  tl.to('section.sliders .hButton1', 1.4, {
    top: (-(($('section.sliders .hButton1').height())+2) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .hButton2' , 1.4, {
    top: (-(($('section.sliders .hButton2').height())+2) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .hButton3' , 1.4, {
    top: (- (($('section.sliders .hButton3').height())+2) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);*/
  
 
  
});

$("#sagaGit").click(function (e) { 
  e.preventDefault();
  var tl = new TimelineMax();
  currentSlideCount=currentSlideCount-1;
  
  if(currentSlideCount<=-1)
  {
    currentSlideCount=slideCount-1;    
  } 
 
  tl.to('section.sliders .wide1', 1.4, {
    left: (-($('section.sliders .wide1').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .wide2' , 1.4, {
    left: (-($('section.sliders .wide2').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .wide3' , 1.4, {
    left: (-($('section.sliders .wide3').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  

  tl.to('section.sliders .thumb1', 1.4, {
    left: (-($('section.sliders .thumb1').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .thumb2' , 1.4, {
    left: (-($('section.sliders .thumb2').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .thumb3' , 1.4, {
    left: (-($('section.sliders .thumb3').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);


  
  tl.to('section.sliders .hCount1', 1.4, {
    left: (-($('section.sliders .hCount1').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .hCount2' , 1.4, {
    left: (-($('section.sliders .hCount2').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .hCount3' , 1.4, {
    left: (-($('section.sliders .hCount3').width()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);


  tl.to('section.sliders .fTitle1', 1.4, {
    top: (-($('section.sliders .fTitle1').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .fTitle2' , 1.4, {
    top: (-($('section.sliders .fTitle2').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .fTitle3' , 1.4, {
    top: (-($('section.sliders .fTitle3').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);


  tl.to('section.sliders .sTitle1', 1.4, {
    top: (-($('section.sliders .sTitle1').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .sTitle2' , 1.4, {
    top: (-($('section.sliders .sTitle2').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);
  tl.to('section.sliders .sTitle3' , 1.4, {
    top: (-($('section.sliders .sTitle3').height()) * currentSlideCount),
    ease : Power3.easeInOut
  }, 0);

  console.log(currentSlideCount);
  
});

