class Media{
  constructor(title,isCheckedOut,rating) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get rating() {
    return this._rating;
  }
  set isCheckedOut(newisCheckedOut) {
    this._isCheckedOut = newisCheckedOut ;
  }
  toggleCheckOutStatus () {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    const sumOfRatings = this._ratings.reduce((acc, rating) => acc + rating, 0);
    const averageRatings = sumOfRatings / this._ratings.length;
    return averageRatings;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title,author,pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author () {
    return this._author = author;
  }
  get pagrs () {
    return this._pages = pages;
  }
}

class Movie extends Media {
  constructor(title,director,runTime) {
    super(title)
    this._director = director;
    this._runTime = runTime;
  }
  get director () {
    return this._director = director;
  }
  get runTime () {
    return this._runTime = runTime;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed','Jan de Bont',116)
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
