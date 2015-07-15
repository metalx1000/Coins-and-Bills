var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'money', { preload: preload, create: create, update: update});

function preload() {

  //  You can fill the preloader with as many assets as your game requires

  //  Here we are loading an image. The first parameter is the unique
  //  string by which we'll identify the image later in our code.

  //  The second parameter is the URL of the image (relative)
  var imgs = [
    "dime",
    "dollor",
    "nickel",
    "penny",
    "quarter"
  ];

  imgs.forEach(function(image){
    game.load.image(image, 'res/money/'+image+".png");
  });

  //game.load.audio('music', ['res/music/music1.ogg', 'res/music/music1.mp3']);
}

function create() {
  game.stage.backgroundColor = '#ffffff'

  //  This creates a simple sprite that is using our loaded image and
  //  displays it on-screen

  var image = game.add.sprite(game.width/2, game.height/2, 'dime');
  //image.scale.setTo(0.5,0.5);
  image.anchor.setTo(0.5, 0.5);
  image.alpha = 0;
  var tween = game.add.tween(image).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None);
  tween.start();
  

  //  Play some music
  //music = game.add.audio('music');
  //music.play('',0,1,true);

  // start fullscreen on click
  game.input.onDown.add(go_fullscreen, this);
}

function update(){
  //this is where things are updated
}

function go_fullscreen(){
  game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.startFullScreen();
}

