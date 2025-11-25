// Parent Class: students
class Students {
  name: string;
  age: number;
  gender: string;        // always female
  nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.gender = "female";    // requirement: all students are females
    this.nationality = nationality;
  }

  // Method that logs nationality
  getNationality(): void {
    console.log("Nationality: " + this.nationality);
  }
}

// Interface: Iundergrad
interface Iundergrad {
  name: string;
  age: number;
  gender: string;
  nationality: string;
  batch: number;
  GPA: number;   // extra property required
}

// Child Class: UnderGraduates
class UnderGraduate extends students implements Iundergrad {
  batch: number;
  GPA: number;

  constructor(
    name: string,
    age: number,
    nationality: string,
    batch: number,
    GPA: number
  ) {
    super(name, age, nationality);  // call parent constructor
    this.batch = batch;
    this.GPA = GPA;
  }
}

// Create an UnderGraduate instance
let Student1 = new UnderGraduate("Alice", 20, "Canadian", 2025, 3.8);

// Print nationality
student1.getNationality();

