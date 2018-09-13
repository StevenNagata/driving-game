var driving;

class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
  turn(direction) {
    this.$img.classList = ''
    this.direction = direction
    this.$img.classList.add(direction)
  }
  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        break
      case 'south':
        this.location[1] += this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      case 'west':
        this.location[0] -= this.speed
    }
    this.$img.setAttribute('style', 'left:' + this.location[0] + 'px; top:' + this.location[1] + 'px; width:150px;height:60px; position:absolute')
  }
  start() {
    let moving = myCar.move.bind(myCar)
    driving = setInterval(moving, 16)
  }
  stop() {
    clearInterval(driving)
  }
}

var carImage = document.createElement('img')
carImage.setAttribute('src', 'http://www.clker.com/cliparts/T/Y/k/f/7/z/purple-car-top-view.svg.hi.png')
carImage.setAttribute('style', 'width:150px;height:60px')
document.body.appendChild(carImage)

var myCar = new Car(carImage, 1, 'east', [0, 0])

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 38 || event.keyCode === 40 || event.keyCode === 37 || event.keyCode === 39) {
    if (event.keyCode == '38') {
      myCar.turn('north')
    }
    else if (event.keyCode == '40') {
      myCar.turn('south')
    }
    else if (event.keyCode == '37') {
      myCar.turn('west')
    }
    else if (event.keyCode == '39') {
      myCar.turn('east')
    }
  }
})

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 32) {
    myCar.start()
  }
})
