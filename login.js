var studentCredentials = [
    {
        id: 'fazal',
        email: 'fazalullah.memon@unifiedcrest.com',
        password: 'fazalullah',


    },

]
var teacherCredentials = [
    {
        id: 'tarique',
        email: 'tarique.jamali@unifiedcrest.com',
        password: 'Tarique',


    },

]
var adminCredentials = [
    {
        id: 'kainat',
        email: 'kainat.mahar@unifiedcrest.com',
        password: 'Kainat',


    },
    {
        id: 'zonera',
        email: 'zonera.aleem@unifiedcrest.com',
        password: 'Zonera',


    },

]

function onClick() {

    console.log('onClick fired');
    var username = document.getElementById("inputEmail3").value;
    var password = document.getElementById("inputPassword3").value;
    if (document.getElementById("stdopt").selected === true) {
        console.log("Student Selected");

        for (var i = 0; i < studentCredentials.length; i++) {
            if (username === studentCredentials[i].email && password === studentCredentials[i].password) {
                window.location.href = `./student.html?id=${studentCredentials[i].id}&desig=student`;
                return;
            }

        }
    }
    else if (document.getElementById("teachopt").selected === true) {
        console.log("Teacher Selected");

        for (var i = 0; i < teacherCredentials.length; i++) {
            if (username === teacherCredentials[i].email && password === teacherCredentials[i].password) {
                window.location.href = `./teacher.html?id=${teacherCredentials[i].id}&desig=teacher`;
                return;
            }

        }
    }
    else if (document.getElementById("adminopt").selected === true) {
        console.log("Admin Selected");

        for (var i = 0; i < adminCredentials.length; i++) {
            if (username === adminCredentials[i].email && password === adminCredentials[i].password) {
                window.location.href = `./student.html?id=${adminCredentials[i].id}&desig=admin`;
                return;
            }

        }
    }
    else {
        console.log("Please select a Designation");
        //Add code for Prompting to select a Designation
    }

}
