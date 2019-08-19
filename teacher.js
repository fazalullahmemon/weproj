var credentials = [
    {
id: 'fazal',
name: 'Fazalullah',
fatherName: 'Shuaib Ahmed',
surname: 'Memon',
gender: 'Male',
nationality: 'Pakistani',
cnic: '43304-4881764-1',
contact: '0332-3943226',
email: 'fazalullah.memon@unifiedcrest.com',
address: 'Room no: 205, Hyder Bux Jatoi Hostel Mehran UET Jamshoro',
enrollmentNumber: '48127',
department: 'CSE',
src: './Fazalullah.jpg'
},

]
var myParams = new URLSearchParams(window.location.search);
window.onload = function() {
    console.log('Window Loaded')
    var id = myParams.get("id").toString();
    console.log(id);
    for(var i =0; i<credentials.length; i++) {
        if(id == credentials[i].id) {
           
            document.getElementById("name").innerText = credentials[i].name;
            document.getElementById("fatherName").innerText = credentials[i].fatherName;
            document.getElementById("surname").innerText = credentials[i].surname;
            document.getElementById("gender").innerText = credentials[i].gender;
            document.getElementById("nationality").innerText = credentials[i].nationality;
            document.getElementById("cnic").innerText = credentials[i].cnic;
            document.getElementById("contact").innerText = credentials[i].contact;
            document.getElementById("email").innerText = credentials[i].email;
            document.getElementById("address").innerText = credentials[i].address;
            document.getElementById("employmentNumber").innerText = credentials[i].enrollmentNumber;
            // document.getElementById("rollNumber").innerText = credentials[i].rollNumber;
            document.getElementById("department").innerText = credentials[i].department;
            document.getElementById("teacherDp").setAttribute('src', `${credentials[i].src}`);


        }
    }
    
}
