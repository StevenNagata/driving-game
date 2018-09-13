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
}

var carImage = document.createElement('img')
carImage.setAttribute('src', 'http://www.clker.com/cliparts/T/Y/k/f/7/z/purple-car-top-view.svg.hi.png')
carImage.setAttribute('style', 'width:150px;height:60px')
document.body.appendChild(carImage)

var myCar = new Car(carImage, 10, 'east', [0,0])
