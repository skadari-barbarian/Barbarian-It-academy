function runJSONPractice() {

    let output = "";


    // ==========================================
    // 1. JSON OBJECT
    // ==========================================

    let studentJSON = `{
        "name": "Srihitha",
        "age": 22,
        "course": "JavaScript",
        "marks": 90
    }`;

    output += "1. JSON Object\n";
    output += studentJSON + "\n\n";


    // ==========================================
    // 2. JSON DATA TYPES
    // ==========================================

    let dataJSON = `{
        "name": "Srihitha",
        "age": 22,
        "isStudent": true,
        "skills": ["HTML", "CSS", "JavaScript"],
        "address": {
            "city": "Hyderabad"
        },
        "middleName": null
    }`;

    output += "2. JSON Data Types\n";
    output += dataJSON + "\n\n";


    // ==========================================
    // 3. JSON ARRAY
    // ==========================================

    let skillsJSON = `[
        "HTML",
        "CSS",
        "JavaScript"
    ]`;

    output += "3. JSON Array\n";
    output += skillsJSON + "\n\n";


    // ==========================================
    // 4. ARRAY OF JSON OBJECTS
    // ==========================================

    let studentsJSON = `[
        {
            "name": "Srihitha",
            "marks": 90
        },
        {
            "name": "Rahul",
            "marks": 75
        },
        {
            "name": "Anu",
            "marks": 85
        }
    ]`;

    output += "4. Array of JSON Objects\n";
    output += studentsJSON + "\n\n";


    // ==========================================
    // 5. NESTED JSON
    // ==========================================

    let nestedJSON = `{
        "name": "Srihitha",
        "address": {
            "city": "Hyderabad",
            "state": "Telangana"
        }
    }`;

    output += "5. Nested JSON\n";
    output += nestedJSON + "\n\n";


    // ==========================================
    // 6. JSON.parse()
    // ==========================================

    let student = JSON.parse(studentJSON);

    output += "6. JSON.parse()\n";

    output += "Name: "
        + student.name
        + "\n";

    output += "Age: "
        + student.age
        + "\n";

    output += "Course: "
        + student.course
        + "\n";

    output += "Marks: "
        + student.marks
        + "\n\n";


    // ==========================================
    // 7. ACCESSING NESTED JSON
    // ==========================================

    let nestedStudent = JSON.parse(nestedJSON);

    output += "7. Accessing Nested JSON\n";

    output += "City: "
        + nestedStudent.address.city
        + "\n";

    output += "State: "
        + nestedStudent.address.state
        + "\n\n";


    // ==========================================
    // 8. ACCESSING JSON ARRAY
    // ==========================================

    let skills = JSON.parse(skillsJSON);

    output += "8. Accessing JSON Array\n";

    output += "First Skill: "
        + skills[0]
        + "\n";

    output += "Second Skill: "
        + skills[1]
        + "\n";

    output += "Third Skill: "
        + skills[2]
        + "\n\n";


    // ==========================================
    // 9. ARRAY OF OBJECTS
    // ==========================================

    let students = JSON.parse(studentsJSON);

    output += "9. Accessing Array of Objects\n";

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


    // ==========================================
    // 10. LOOPING THROUGH JSON
    // ==========================================

    output += "10. Looping Through JSON\n";

    for (let student of students) {

        output += student.name
            + " scored "
            + student.marks
            + "\n";

    }

    output += "\n";


    // ==========================================
    // 11. JSON.stringify()
    // ==========================================

    let studentObject = {

        name: "Srihitha",
        age: 22,
        course: "JavaScript",
        marks: 90

    };

    let convertedJSON = JSON.stringify(studentObject);

    output += "11. JSON.stringify()\n";

    output += convertedJSON + "\n\n";


    // ==========================================
    // 12. OBJECT → JSON
    // ==========================================

    output += "12. Object → JSON\n";

    output += "JavaScript Object:\n";

    output += studentObject.name
        + "\n";

    output += studentObject.course
        + "\n";

    output += "\nConverted JSON:\n";

    output += convertedJSON
        + "\n\n";


    // ==========================================
    // 13. JSON → OBJECT
    // ==========================================

    let jsonString = `{
        "name": "Srihitha",
        "age": 22,
        "course": "JavaScript"
    }`;

    let convertedObject = JSON.parse(jsonString);

    output += "13. JSON → JavaScript Object\n";

    output += "Name: "
        + convertedObject.name
        + "\n";

    output += "Age: "
        + convertedObject.age
        + "\n";

    output += "Course: "
        + convertedObject.course
        + "\n\n";


    // ==========================================
    // 14. MODIFY PARSED JSON
    // ==========================================

    convertedObject.age = 23;

    convertedObject.marks = 95;

    output += "14. Modifying Parsed JSON\n";

    output += "Name: "
        + convertedObject.name
        + "\n";

    output += "Age: "
        + convertedObject.age
        + "\n";

    output += "Marks: "
        + convertedObject.marks
        + "\n\n";


    // ==========================================
    // 15. CONVERT MODIFIED OBJECT BACK TO JSON
    // ==========================================

    let modifiedJSON =
        JSON.stringify(convertedObject);

    output += "15. Modified Object → JSON\n";

    output += modifiedJSON
        + "\n\n";


    // ==========================================
    // 16. API-STYLE JSON DATA
    // ==========================================

    let apiResponse = `{
        "id": 101,
        "name": "Srihitha",
        "email": "srihitha@example.com",
        "course": "Python Full Stack",
        "skills": [
            "Python",
            "JavaScript",
            "SQL"
        ]
    }`;

    let apiData = JSON.parse(apiResponse);

    output += "16. API-Style JSON\n";

    output += "ID: "
        + apiData.id
        + "\n";

    output += "Name: "
        + apiData.name
        + "\n";

    output += "Email: "
        + apiData.email
        + "\n";

    output += "Course: "
        + apiData.course
        + "\n";

    output += "Skill 1: "
        + apiData.skills[0]
        + "\n";

    output += "Skill 2: "
        + apiData.skills[1]
        + "\n";

    output += "Skill 3: "
        + apiData.skills[2]
        + "\n\n";


    // ==========================================
    // FINAL OUTPUT
    // ==========================================

    document.getElementById("output").textContent = output;
}


function clearOutput() {

    document.getElementById("output").textContent =
        "Click \"Run JSON Practice\" to see the output.";

}