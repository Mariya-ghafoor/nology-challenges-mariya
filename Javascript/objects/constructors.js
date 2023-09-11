// const dog = {
//   walk(distanceKm) {
//     const dogDistance = distanceKm;
//     return distanceKm;
//   },

//   walkSummary(noOfWalks) {
//     const totalDistance = noOfWalks * this.dogDistance;
//     return `Dog has gone on ${noOfWalks} and has covered total distance of ${totalDistance}`;
//   },
//   walkAverage() {
//     return this.totalDistance / this.noOfWalks;
//   },
// };

// const myDog = dog;
// myDog.walk(12);
// console.log(myDog);
// //myDog.walkAverage(2);
// //console.log(myDog.walk(12));
// //console.log(myDog.walkAverage(2));
// //dog.walk(12);

// //console.log(dog.walkSummary(2));

const dog = {
  name: "Doggie",
  breed: "gsd",
  distance: (distance = []),
  totalDistance: (totalDistance = 0),

  walks: function (distance) {
    this.distance.push(distance);
  },

  walkSummary: function () {
    const numOfWalks = this.distance.length;
    this.totalDistance = this.distance.reduce((a, b) => a + b);
    console.log(this.totalDistance);

    return `${this.name} has gone on ${numOfWalks} walks and has covered total distance of ${this.totalDistance}km`;
  },
};

//console.log(dog.walkSummary());
// dog.walks(2);
// dog.walks(4);
// dog.walks(5);
// console.log(dog.walkSummary());

function myDog(name, breed) {
  let obj = new Object();
  obj = {
    name: name,
    breed: breed,
    distance: (distance = []),
    totalDistance: (totalDistance = 0),

    walks: function (distance) {
      this.distance.push(distance);
    },

    walkSummary: function () {
      const numOfWalks = this.distance.length;
      this.totalDistance = this.distance.reduce((a, b) => a + b);
      console.log(this.totalDistance);

      return `${this.name} has gone on ${numOfWalks} walks and has covered total distance of ${this.totalDistance}km`;
    },
  };
  return obj;
}

let newDog = myDog("peanut", "chih");

//newDog.walks(4);
newDog.walks(3);
console.log(newDog.walkSummary());
