class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
}

var carImage = document.createElement('img')
carImage.setAttribute('src', 'https://banner2.kisspng.com/20180320/quq/kisspng-car-mercedes-benz-computer-icons-white-modern-car-top-view-5ab18d1e5c5254.5833239915215854383782.jpg')
document.body.appendChild(carImage)

var myCar = new Car(carImage, 10, 'north', [0,0])
