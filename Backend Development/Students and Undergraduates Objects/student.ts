// Parent Class: Students
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

// Interface: IUndergrad
interface IUndergrad {
  batch: number;
  GPA: number;   // extra property required
}

// Child Class: UnderGraduates
// 注意：这里实现了 IUndergrad 接口，继承了 Students 类
class UnderGraduate extends Students implements IUndergrad {
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
let student1 = new UnderGraduate("Alice", 20, "Canadian", 2025, 3.8);

// Print nationality
student1.getNationality(); // 输出: Nationality: Canadian