class Car {
    constructor(name, type, model, engineType, horsePower, description, price, country, imageName) {
        this.name = name;
        this.type = type;
        this.slug = name.trim().toLowerCase().replace(/\s+/g, '-');
        this.model = model;
        this.engineType = engineType;
        this.horsepower = horsePower;
        this.description = description;
        this.price = price;
        this.country = country;
        this.imageName = imageName;
    }
}

const audis = [
    new Car('AudiA4', 'audi', 'A4', '2.0L I4', '190 HP', 'The Audi A4 is a stylish compact luxury sedan with cutting-edge technology and performance.', '$40,000', 'Germany', './images/audi-a4.jpg'),
    new Car('AudiA6', 'audi','A6', '3.0L V6', '333 HP', 'The Audi A6 is a luxury sedan offering advanced technology and powerful performance for those who enjoy driving.', '$55,000', 'Germany', './images/audi-a6.jpg'),
    new Car('AudiQ5', 'audi', 'Q5', '2.0L I4', '248 HP', 'The Audi Q5 is a luxury compact SUV with ample interior space, off-road capabilities, and smooth driving dynamics.', '$45,000', 'Germany', './images/audi-q5.jpg')
];

const bmws = [
    new Car('BMW3S', 'bmw','3 Series', '2.0L I4', '255 HP', 'The BMW 3 Series is a sporty and luxurious compact sedan, known for its sharp handling and premium features.', '$45,000', 'Germany', './images/bmw-3-series.jpg'),
    new Car('BMWX5', 'bmw','X5', '3.0L I6', '335 HP', 'The BMW X5 is a luxury mid-size SUV, offering both on-road comfort and off-road capability, perfect for family adventures.', '$60,000', 'Germany', './images/bmw-x5.jpg'),
    new Car('BMWM5', 'bmw','M5', '4.4L V8', '617 HP', 'The BMW M5 is a high-performance luxury sedan that delivers thrilling speed, agile handling, and top-tier technology.', '$105,000', 'Germany', './images/bmw-m5.jpg')
];

const allCars = [...audis, ...bmws];

export {audis, bmws, allCars};
    