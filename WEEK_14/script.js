const grades = [];
function add(n) {
    for (let i = 1; i <= n; i++) {
        grades.push(Math.floor(Math.random() * 100));
        i + 1;
    };
    return grades;
};
add(12);
console.log(grades); //массив оценок

let summ = 0;
grades.forEach(function (grade) {
    summ += grade;
    return summ;
});
const mid = Math.round(summ / 12);
console.log(mid); //средний балл

const maxGrade = Math.max(...grades);
console.log(maxGrade); // самый высокий балл

const minGrade = Math.min(...grades);
console.log(minGrade); // самый низкий балл

const goodGrades = grades.filter((grade) => grade >= 60);
console.log(goodGrades.length); // количество хороших оценок
console.log(grades.length - goodGrades.length); // количество оставшихся низких оценок

const lowGrades = grades.filter((grade) => grade < 60);
console.log(lowGrades.length); // количество низких оценок
console.log(grades.length - lowGrades.length); // количество оставшихся хороших оценок

const letterGrades = grades.map(function (grade) {
    if (grade >= 80 & grade <= 100) { return "A" }
    else if (grade < 80 & grade >= 60) { return "B" }
    else if (grade < 60 & grade >= 40) { return "C" }
    else if (grade < 40 & grade >= 20) { return "D" }
    else if (grade < 20 & grade >= 0) { return "E" }
    else { return "Что то пошло не так" }
});
console.log(letterGrades); // оценки в буквенном формате