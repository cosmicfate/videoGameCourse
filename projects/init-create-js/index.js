/*
 * TODO 4: Create a modularized index.js, 
 * pass in window and createjs
 */
(function(window, createjs) {
  // TODO 5: Initialize CreateJS //
  const
    canvas = document.getElementById("canvas"),
    stage = new createjs.Stage(canvas);

  // TODO 6: Set the framerate of the Ticker
  createjs.Ticker.framerate = 60;


  /*
   * TODO 7:CREATE AND CONFIGURE ANY DISPLAY 
   * OBJECTS AND ADD THEM TO THE DISPLAY LIST HERE
   */
  
  // INIT CREATEJS //
  const
    radius = 25,
    bg = new createjs.Shape(),
    circle = new createjs.Shape();

  // CREATE A BACKGROUND //
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  bg.graphics.beginFill('#CCC').drawRect(0, 0, canvas.width, canvas.height);

    
  // CREATE A CIRCLE //
  circle.graphics.beginFill('coral').drawCircle(0, 0, radius);
  circle.graphics.f('purple').dc(0,0,radius);
  circle.graphics.f('red').dc(0,0,radius)
  circle.x = canvas.width / 2;
  circle.y = canvas.height / 2;

  // ADD DISPLAY OBJECTS TO STAGE //
  stage.addChild(bg);

  stage.addChild(container);

  container.addChild(circle);

  




  // TODO 8: Listen to the 'tick' event  //
  let tickerHandler = createjs.Ticker.on("tick",onTick);
  

  // TODO 9: Handle the 'tick' event //
  function onTick(event){
    update(event)
  }
  

  /*
   * TODO 10: Implement an update Function, after making 
   * changes to assets, it must call stage.update(); 
   */
  function update(event){
      stage.update();
  }
  

}(window, window.createjs));
