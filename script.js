// Задание 1: ""Управление библиотекой книг""
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        if (!Number.isFinite(pages) || pages <= 0 || pages > 5000 || (pages % 1) !== 0) {
            throw new Error("Некорректное значение количества страниц.")
        }
        this.pages = pages;
    }
    displayInfo() {
        console.log(`\"${this.title}\", ${this.author}, ${this.pages} стр.`);
    }
}
//проверка
const book1 = new Book("Лолита", "В.В.Набоков", 280);
book1.displayInfo();
const book2 = new Book("Мертвые души", "Н.В.Гоголь", 35000);
book2.displayInfo();

//  Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript
// // Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade
// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Age: 17
// // Grade: 11th grade"
class Student {
    constructor(name, age, grade) {
        this.name = name;
        if (!Number.isFinite(age) || age <= 0 || age > 120 || (age % 1) !== 0) {
            throw new Error("Некорректное значение возраста студента.")
        }
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}\n`);
    }
}
//check
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
const student3 = new Student("Alex J.", 12.34, "5th grade");
student3.displayInfo();