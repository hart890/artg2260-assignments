Y_AXIS = 1;
var c1, c2;
var scl = 20;
var snake;
var food;
var score = 0;

var obs;
//var obs = [];

function setup() {
  createCanvas(scl * 30, scl * 20);

  c1 = color(255, 0, 127);
  c2 = color(255, 145, 0);

  snake = new Snake(1);
  food  = new Food();

  obs1 = new Obstacle();
  obs2 = new Obstacle();

  // for (let i = 0; i < 3 > 10; i++) {
  //   obs[i] = new Obstacle();
  // }
}

function draw() {
  setGradient(0, 0, 600, 450, c1, c2, Y_AXIS);
  noStroke();

  fill(255);
  textSize(20);
  text('Score = ' + score, 10, 30);

  frameRate(constrain(snake.level * 6, 10, 40));
  snake.eat(food);
  snake.move();
  ///snake.hit(obs[i]);
  snake.die();
  snake.draw();
  food.draw();

  obs1.move();
  obs1.show();

  obs2.move();
  obs2.show();

  //  for (let i = 0; i < obs.length + 1; i++) {
  //   obs[i].move();
  //   obs[i].show();
  //   obs[i].hit(snake);
  // }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}

function cols() {
  return floor(width / scl);
}

function rows() {
  return floor(height / scl);
}

function randomVector() {
  return createVector(floor(random(cols())), floor(random(rows())));
}


////////////////////////////////////////////

function Snake(level) {
  this.level = level;

  this.resetSnake = function() {
    this.x = cols()/2 * scl;
    this.y = rows()/2 * scl;
    this.xspeed = -1;
    this.yspeed = 0;
    this.tail = [];
    this.points = 0;
    this.level = 1;
  };

  this.dir = function(x, y) {
    // do not allow snake to go backwards
    if (x != 0 && this.xspeed != x * (-1)
        || y != 0 && this.yspeed != y * (-1)) {
      this.xspeed = x;
      this.yspeed = y;
    }
  }

  this.levelUp = function() {
    this.level = floor(this.points / 10) + 1;
    console.log("level " + this.level);
  }

  this.eat = function(food) {
    // head is on top of food?
    if (this.x === food.x() && this.y === food.y()) {
      food.eaten();
      score++;
      this.points++;
      this.tail.push(createVector(this.x, this.y));
      this.levelUp();
      console.log(this.points + " points");
    }
  }

  // this.hit = function(obs) {
  //   if (this.x === obs.x() && this.y === obs.y()) {
  //     this.resetSnake();
  //     score = 0;
  //     this.points = 0;
  //   }
  // }

  this.die = function() {
    // snake bit his own body?
    var isDead = this.tail.some((square) => {
      return square.x === this.x && square.y === this.y;
    });

    if (isDead) {
      this.resetSnake();
      score = 0;
    }
  }

  this.move = function() {
    // put last square of tail in front of the line
    if (this.tail.length > 0) {
      var tipOfTail = this.tail.pop();
      tipOfTail.x = this.x;
      tipOfTail.y = this.y;
      this.tail.unshift(tipOfTail);
    }

    // move head
    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;

    // wrap around right and bottom edges
    this.x %= width;
    this.y %= height;

    // wrap around left and top edges
    if (this.x < 0) {
      this.x = width - scl;
    }
    if (this.y < 0) {
      this.y = height - scl;
    }
  }

  this.draw = function() {
    // sets the 'brush' color
    fill(255);

    // draws the head
    rect(this.x, this.y, scl, scl);

    // draws the tail
    for(var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
  }

  this.resetSnake();
}

////////////////////////////////////////////

function Food() {
  this.vec = randomVector().mult(scl);

  this.x = function() {
    return this.vec.x;
  }

  this.y = function() {
    return this.vec.y;
  }

  this.draw = function() {
    fill(0);
    rect(this.x(), this.y(), scl, scl);
  }

  this.eaten = function() {
    this.vec = randomVector().mult(scl);
  }
}

////////////////////////////////////////////

function Obstacle() {
  this.x = random(width-100, width+800);
  this.y = 0;
  this.height = random(100, 200);
  this.speed = 5;

  this.move = function() {
    this.x -= this.speed;
  }

  this.show = function() {
    rect(this.x, this.y, 20, this.height);
  }

  // this.hit = function(snake) {
  //   if(this.x === snake.x && this.y === snake.y) {
  //     snake.resetSnake();
  //      score = 0;
  //      snake.points = 0;
  //   }
  // }

    // this.hit = function(obs) {
    // if (this.x === obs[i].x() && this.y === obs[i].y()) {
    //   this.resetSnake();
    //   score = 0;
    //   this.points = 0;
    // }
  
}

////////////////////////////////////////////

//for background
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  for (var i = y; i <= y+h; i++) {
    var inter = map(i, y, y+h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x+w, i);
  }
}