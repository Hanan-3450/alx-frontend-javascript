// js/main.ts
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

const cpp = new Subjects.Cpp();
const teacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

cpp.setTeacher(teacher);

console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
