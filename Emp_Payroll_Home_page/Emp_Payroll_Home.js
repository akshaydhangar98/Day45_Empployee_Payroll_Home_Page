window.addEvenListener('DOMContentLoaded',(event) =>{
    createInnerHtml();
});

//Templete features 
//UC4
const CreateInnerHtml = () =>{
const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                    "<th>Salary</th><th>Start Date</th><th>Actions</th>";

const innerHtml = `'${headerHtml}
<tr>
    <td><img class="profile" src="profile-images/Ellipse -2.png" alt=""></td> 
    <td>Narayan Mahadevan</td>
    <td>Male</td>
    <td><div class="dept-label">HR<</div><div class='dept-label'>Finance</div></td> 
    <td>3000000</td>
    <td>1 Nov 2020</td>
    <td>
    <img name="1" onclick="remove(this)" src="asset/delete-black-18dp.svg" alt="delete">
    <img name="1" onclick="update(this)" src="asset/create-black-18dp.svg" alt="edit">
</td>
</tr>
`;
document.querySelector('#table-display').innerHtml = innerHtml;
}

//UC5
const createInneriital = () =>{

    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th>";

    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollList of empPayrollList){
        innerHtml = `${headerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td> 
        <td>"${empPayrollData._name}"</td>
        <td>"${empPayrollData._gender}"</td>
        <td>${getDeptHtml(empPayrollData._department)}</td> 
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove(this)" 
            src="Asset/icons/delete-black-18dp.svg" alt="delete">
            <img name="${empPayrollData._id}" onclick="update(this)" 
            src="Asset/icons/create-black-18dp.svg" alt="edit">
        </td>
    </tr>`; 
    }
    document.querySelector('#table-display').innerHtml = innerHtml;
}

//UC6
let empPayrollList;
window.addEvenListener('DOMContentLoaded',(event) =>{
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});
const getEmployeePayrollDataFromStorage = () =>{
    return localStorage.getItem('EmployeePayrollList')?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}


const createInnerHtml = () =>{

    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if(employeePayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollList of empPayrollList){
        innerHtml = `${headerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td> 
        <td>"${empPayrollData._name}"</td>
        <td>"${empPayrollData._gender}"</td>
        <td>${getDeptHtml(empPayrollData._department)}</td> 
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove(this)" 
            src="Asset/icons/delete-black-18dp.svg" alt="delete">
            <img name="${empPayrollData._id}" onclick="update(this)" 
            src="Asset/icons/create-black-18dp.svg" alt="edit">
        </td>
    </tr>`; 
    }
    document.querySelector('#table-display').innerHtml = innerHtml;
}