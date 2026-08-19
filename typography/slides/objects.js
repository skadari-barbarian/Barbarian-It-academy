function runPractice() {

    let output = "";


    // 1. Creating an Object

    let student = {
        name: "Srihitha",
        age: 22,
        course: "JavaScript",
        marks: 90
    };

    output += "1. Creating Object\n";
    output += "Name: " + student.name + "\n";
    output += "Age: " + student.age + "\n\n";


    // 2. Dot Notation

    output += "2. Dot Notation\n";

    output += "Name: " + student.name + "\n";
    output += "Course: " + student.course + "\n\n";


    // 3. Bracket Notation

    output += "3. Bracket Notation\n";

    output += "Name: " + student["name"] + "\n";
    output += "Marks: " + student["marks"] + "\n\n";


    // 4. Changing Property

    student.age = 23;
    student.marks = 95;

    output += "4. Changing Property\n";

    output += "Age: " + student.age + "\n";
    output += "Marks: " + student.marks + "\n\n";


    // 5. Adding Property

    student.city = "Hyderabad";

    output += "5. Adding Property\n";

    output += "City: " + student.city + "\n\n";


    // 6. Deleting Property

    delete student.city;

    output += "6. Deleting Property\n";

    output += "City: " + student.city + "\n\n";


    // 7. Different Data Types

    let person = {

        name: "Srihitha",
        age: 22,
        isStudent: true,

        skills: [
            "HTML",
            "CSS",
            "JavaScript"
        ]

    };

    output += "7. Different Data Types\n";

    output += "Name: " + person.name + "\n";
    output += "Age: " + person.age + "\n";
    output += "Student: " + person.isStudent + "\n";
    output += "Skill: " + person.skills[0] + "\n\n";


    // 8. Nested Object

    let studentDetails = {

        name: "Srihitha",

        address: {
            city: "Hyderabad",
            state: "Telangana"
        }

    };

    output += "8. Nested Object\n";

    output += "City: "
        + studentDetails.address.city
        + "\n";

    output += "State: "
        + studentDetails.address.state
        + "\n\n";


    // 9. Array Inside Object

    let studentInfo = {

        name: "Srihitha",

        skills: [
            "HTML",
            "CSS",
            "JavaScript"
        ]

    };

    output += "9. Array Inside Object\n";

    output += "First Skill: "
        + studentInfo.skills[0]
        + "\n";

    output += "Second Skill: "
        + studentInfo.skills[1]
        + "\n\n";


    // 10. Object Method

    let user = {

        name: "Srihitha",

        greet: function() {
            return "Hello!";
        }

    };

    output += "10. Object Method\n";

    output += user.greet() + "\n\n";


    // 11. this Keyword

    let userDetails = {

        name: "Srihitha",

        greet: function() {
            return "Hello " + this.name;
        }

    };

    output += "11. this Keyword\n";

    output += userDetails.greet() + "\n\n";


    // 12. Array of Objects

    let students = [

        {
            name: "Srihitha",
            marks: 90
        },

        {
            name: "Rahul",
            marks: 75
        },

        {
            name: "Anu",
            marks: 85
        }

    ];

    output += "12. Array of Objects\n";

    output += students[0].name
        + " - "
        + students[0].marks
        + "\n";

    output += students[1].name
        + " - "
        + students[1].marks
        + "\n";

    output += students[2].name
        + " - "
        + students[2].marks
        + "\n\n";


    // 13. Looping Through Objects

    output += "13. Looping Through Objects\n";

    for (let student of students) {

        output += student.name
            + " scored "
            + student.marks
            + "\n";

    }

    output += "\n";


    // 14. map()

    let names = students.map(function(student) {

        return student.name;

    });

    output += "14. map()\n";

    output += names.join(", ") + "\n\n";


    // 15. filter()

    let passedStudents = students.filter(function(student) {

        return student.marks > 80;

    });

    output += "15. filter()\n";

    for (let student of passedStudents) {

        output += student.name
            + " - "
            + student.marks
            + "\n";

    }

    output += "\n";


    // 16. Object.keys()

    output += "16. Object.keys()\n";

    let keys = Object.keys(student);

    output += keys.join(", ") + "\n\n";


    // 17. Object.values()

    output += "17. Object.values()\n";

    let values = Object.values(student);

    output += values.join(", ") + "\n\n";


    // 18. Object.entries()

    output += "18. Object.entries()\n";

    let entries = Object.entries(student);

    for (let entry of entries) {

        output += entry[0]
            + " : "
            + entry[1]
            + "\n";

    }


    // Display result on page

    document.getElementById("output").textContent = output;

}