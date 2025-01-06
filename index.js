
let students = []

let student1 = {
    name: "Yash",
    rollNo: 23,
    height: "5ft",
    address: {
        flatNo: 22,
        lane: "dindori road"
    }
}

students.push(student1)

let student2 = {
    name: "tanvi",
    rollNo: 23,
    height: "6ft",
    address: {
        flatNo: 22,
        lane: "dindori road"
    }
}
students.push(student2)
let student3 = {
    name: "arya",
    rollNo: 23,
    height: "6ft",
    address: {
        flatNo: 22,
        lane: "dindori road"
    }
}

students.push(student3)


/*
<table>
    <thead>
        <tr>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
        </tr>
    </tbody>
</table>
*/


document.write(`<table border="1">`)
// thead
document.write("<thead>")
document.write("<tr>")
document.write("<th>")
document.write("ID")
document.write("</th>")
document.write("<th>")
document.write("Name")
document.write("</th>")

document.write("<th>")
document.write("Roll No")
document.write("</th>")

document.write("<th>")
document.write("height")
document.write("</th>")

document.write("<th>")
document.write("Address")
document.write("</th>")




document.write("</tr>")
document.write("</thead>")

// tbody
document.write("<tbody>")

for (let index = 0; index < students.length; index++) {



    document.write("<tr>")
    document.write("<td>")
    document.write(index + 1)
    document.write("</td>")

    document.write("<td>")
    document.write(students[index].name)
    document.write("</td>")


    document.write("<td>")

    document.write("</td>")

    document.write("<td>")

    document.write("</td>")

    document.write("<td>")

    document.write("</td>")

    document.write("</tr>")

}
document.write("</tbody>")





document.write("</table>")