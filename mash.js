function rng(num) {
    return Math.floor(Math.random() * (num))
}

let Array_ = ['Mansion' , 'Castle' , 'Shack' , 'House'];
if (process.argv[2]) {
    Array_.push(process.argv[2])
}
function getHome() {
    S = Array_[(Math.floor(Math.random()* Array_.length))]; 
    if (process.argv[2] === S) {
        return process.argv[2];
    }
    if (Array_[Array_.length -1] === " ") {
        console.log('nothing')
    }
    else {
        return S
    }
}

function getTravelCount() {
    RandT = Math.random() * 101
    RandTr = Math.floor(RandT)
    return RandTr
}

let Pets = ['Dog', 'Bird', 'Big Elephant', 'no pets']
if (process.argv[3]) {
    Pets.push(process.argv[3]);
}
function getPets() {
    E = Pets[(Math.floor(Math.random() * Pets.length))];
    if (process.argv[3] === E) {
        return process.argv[3];
    }
    if (Pets[Pets.length -1] === " ") {
        return 'nothing';
    }
    else {
        return E
    }
}

let College = ['UMICH', 'NYU', 'Community Colllege', 'Drop out']
if (process.argv[4]) {
    College.push(process.argv[4])
}
function getCollege() {
    F = College[(Math.floor(Math.random() * College.length))];
    if (process.argv[4] === F) {
        return process.argv[4];
    }
    if (College[College.length -1] === " ") {
        return 'nothing'
    }
    else {
        return F
}
  }
let Job = ['Softare Developer at Apple', 'Economist', 'Quant Developer', 'Janitor', 'Unemployed']
if (process.argv[5]) {
    Job.push(process.argv[5]); 
}
function getJob() {
    T = Job[(Math.floor(Math.random() * Job.length))]
    if (process.argv[5] === T) {
        return process.argv[5];
    }
    if (Job[Job.length -1] === " ") {
        return 'nothing';
    }
    else {
        return T;
}
}
let Car = ['Mercedes', 'Jeep', 'Damaged Car', 'carless? huh']
if (process.argv[6]) {
    Car.push(process.argv[6])
}
function getCar() {
    R = Car[(Math.floor(Math.random() * Car.length))];
    if (process.argv[6] === R) {
        return process.argv[6];
    }
    if (Car[Car.length -1] === " ") {
        return 'nothing'
    }
    else {
        return R
}
}

function mash() {
    console.log('you will live in a: ' + getHome() + ' and travel to: ' + getTravelCount() + ' countries!. You will have a: ' + getPets()) 
    console.log('The college you will get into: ' + getCollege() + ' and your Profession is: ' + getJob());
    console.log('Your car is: ', getCar())
 }

 mash()
 

