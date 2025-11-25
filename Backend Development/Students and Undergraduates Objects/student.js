var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// Parent Class: students
var students = /** @class */ (function () {
    function students(name, age, nationality) {
        this.name = name;
        this.age = age;
        this.gender = "female"; // requirement: all students are females
        this.nationality = nationality;
    }
    // Method that logs nationality
    students.prototype.getNationality = function () {
        console.log("Nationality: " + this.nationality);
    };
    return students;
}());

// Child Class: UnderGraduates
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(name, age, nationality, batch, GPA) {
        var _this = _super.call(this, name, age, nationality) || this; // call parent constructor
        _this.batch = batch;
        _this.GPA = GPA;
        return _this;
    }
    return UnderGraduates;
}(students));

// Create an UnderGraduate instance
var student1 = new UnderGraduates("Alice", 20, "Canadian", 2025, 3.8);
// Print nationality
student1.getNationality();
