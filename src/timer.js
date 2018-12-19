class Timer {
  constructor(inputEl,callback) {
    this.paused = false;
    this.started = false;
    this.stopped = true;
    this.currentCount = 0 ;
    this.running = false;
    this.inputEl = inputEl;
     this.callback=callback;
    this.interval = 1000;
    this.maxCount = 0;
    this.k = true;

  }

  start() {
    this.k = true;
    if (this.stopped) {
      this.started = true;
      this.paused = false;
      this.stopped = false;
      this.currentCount = Number(this.inputEl.value);
      this.loop();
      this.running = true;
    }

    this.paused = false;
  }

  pause() {
    this.paused = true;
  }

  stop() {
    this.stopped = true;
    this.currentCount=0;
    document.getElementById("show").innerHTML = this.currentCount; 
  }
  
  update(item) {
    if(this.k)
    {
      document.getElementById("show").innerHTML = item;    
    --this.currentCount;
    }
    if(!this.k)
    {
      document.getElementById("show").innerHTML = item;    
      ++this.currentCount;
    }
    if (this.currentCount < 0) {
      this.callback.call();      
      this.stop();
    }
  }

  reset() {
    this.currentCount = Number(this.inputEl.value);

    document.getElementById("show").innerHTML = this.currentCount;
  }

  loop() {
    if (!this.stopped) {
      if (!this.paused) {
        this.update(this.currentCount);
      }

      setTimeout(() => this.loop(), this.interval);
    }
  }
  seeec(){
    this.k = false;
  }
}


function alertText(){
  alert(document.getElementById("mess").value);
}

window.onload = function() { 
  let inputEl = document.getElementById("sec");
  const func = new Timer(inputEl,alertText);
  start.onclick= function()
  {func.start();}
  STOP.onclick= function()
  {func.stop();}
  reset.onclick= function()
  {func.reset();}
  pause.onclick= function()
  {func.pause();}
  SEC.onclick=function()
  {func.seeec();}
}