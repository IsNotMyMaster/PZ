var slider = {
  slides:['Images/mattress.png','Images/mattress2.png','Images/mattress2.png','Images/mattress3.png','Images/mattress.png'],
  frame:0, // текущий кадр для отбражения - индекс картинки из массива
  set: function(image) { // установка нужного фона слайдеру
    document.getElementById("scr").style.backgroundImage = "url("+image+")";
  },
 
  left: function() { // крутим на один кадр влево
    this.frame--;
    if(this.frame < 0) this.frame = this.slides.length-1;
    this.set(this.slides[this.frame]);
  },
  right: function() { // крутим на один кадр вправо
    this.frame++;
    if(this.frame == this.slides.length) this.frame = 0;
    this.set(this.slides[this.frame]);    
  }
};