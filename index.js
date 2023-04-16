import express from "express";
const app = express();
const students = [
    {
        id: 1,
        name: 'Aya',
        city: 'Menouf'
    },
    {
        id: 2,
        name: 'Eslam',
        city: 'Tamalay'
    },
    {
        id: 3,
        name: 'Nor',
        city: 'Tanta'
    },
    {
        id: 4,
        name: 'Asmaa',
        city: 'Tanta'
    }
];
const studentFunction = (request, response) => {
    let output = "<ul>";
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        output += "<li>" + student.name + "</li>";
    }
    output += "</ul>";
    response.send(output);
}



app.get('/students', studentFunction);
app.listen(3000);