class Personal {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   set name(name) {
      this._name = name;
   }

   set age(age) {
      this._age = age;
   }

   get name() {
      return this._name;
   }

   get age() {
      return this._age;
   }
}

class Employee extends Personal {
   constructor(name, age, job) {
      super(name, age);
      this.job = job;
   }

   set job(job) {
      this._job = job;
   }

   get job() {
      return this._job;
   }
}

let e = new Employee('Thanh', 28, 'Developer');
e.job = 'Designer';
console.log(e.job);
