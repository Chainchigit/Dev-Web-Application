class School {
  constructor(name,level,numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() { return this._name;}
  get level() { return this._level;}
  get numberOfStudents(){ return this._numberOfStudents;}
    set numberOfStudents(newNumberOfStudents) {
      if(typeof newNumberOfStudents === 'number' && newNumberOfStudents > 0) {
        this._numberOfStudents = newNumberOfStudents;
      } else {console.log('Invalid input: numberOfStudents must be set to a Number.');}
  }
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level with sportTeam ${this._sportsTeams} and avgScores ${this._averageTestScores}`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random()* substituteTeachers.length-1)
    return substituteTeachers[randomIndex];
  }
}

class PrimarySchool extends School{
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
class MediumSchool extends School {
  constructor(name,numberOfStudents,sportsTeams,averageTestScores) {
    super(name,'medium',numberOfStudents);
    this._sportsTeams = sportsTeams;
    this._averageTestScores = averageTestScores;
  }
  get sportsTeams() {console.log(this._sportsTeams);}
  get averageTestScores() {console.log(this._averageTestScores);}
  get schoolOverview() {return this._schoolOverview;}
  set averageTestScores(avgTestScore) {
    if (typeof avgTestScore === 'number' && avgTestScore > 0){
    this._averageTestScores = avgTestScore;}
    else console.log(`The Average Test score should be a numeric and greater than zero!`); }
  set sportsTeams(inputSportsTeams) {
    this._sportsTeams.push(inputSportsTeams);
  }
}


class HighSchool extends School{
  constructor(name,numberOfStudents,sportsTeams,averageTestScores, schoolOverview){
    super(name,'high',numberOfStudents);
    this._sportsTeams = sportsTeams;
    this._averageTestScores = averageTestScores;
    this._schoolOverview = schoolOverview;
  }
  get sportsTeams() {console.log(this._sportsTeams);}
  get averageTestScores() {console.log(this._averageTestScores);}
  get schoolOverview() {return this._schoolOverview;}
  set averageTestScores(avgTestScore) {
    if (typeof avgTestScore === 'number' && avgTestScore > 0){
    this._averageTestScores = avgTestScore;}
    else console.log(`The Average Test score should be a numeric and greater than zero!`); }
  set sportsTeams(inputSportsTeams) {
    this._sportsTeams.push(inputSportsTeams);
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

//lorraineHansbury.quickFacts();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));


const alSmith = new HighSchool ('Al E. Smith',415,'Baseball',355)

//alSmith.sportsTeams;
alSmith.quickFacts();


// Creating instance of Medium School
const johnsonMedium = new MediumSchool('Johnson Medium School', 254,'Football', 100);
johnsonMedium.quickFacts();


class SchoolCatalog {
  constructor(name){
    this._name = name;
    this._school = [];
  }
  get school(){return this._school}
  set school(school) {this._school.push(school);
  }
}

const addSchool = new SchoolCatalog('Add School');
// console.log(newMediumSchool.school);
addSchool.school = 'Al E. Smith';
addSchool.school = 'All Saints School';
addSchool.school = 'Lorraine Hansbury';

// Print out all school names
console.log(addSchool.school);




