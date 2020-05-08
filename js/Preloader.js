Game.Preloader = function (game){

    this.preloaderBar = null;
    
};

Game.Preloader.prototype = {
      preload:function(){
      
          this.preloadBar = this.addsprite(this.world.centerX,
                                          this.world.centerY,'preloaderBar');
                                          
          this.preloadBar.anchor.setTo(0.5,0,0.5);
          
          this.time.advancedTiming = true;
          
          this.load.setPreloadSpirite(this.preloadBar);
          
          //LOAD ALL ASSETS
          
          
          },
          
          create:function(){
          
              this.state.start('Level1');
          
          }
          
          
          
          
          
          };
          
    
