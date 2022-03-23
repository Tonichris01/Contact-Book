var x = document.getElementById('openPage');
var y = document.getElementById('homePage');
var z = document.getElementById('menuPage');
var view = document.getElementById('viewContactPage');
var add = document.getElementById('addContactPage');
var updte = document.getElementById('updateContactPage');

// var dataStorageArray = [];
// const newId = getNewId();

const defaultData = [{
        "id": 1,
        "userName": "cray",
        "nickName": "fish",
        "phoneNumber": "12345609878",
        "email": "",
        "address": "none",
        "website": "none",
        "group": "none"
    },
    {
        "id": 2,
        "userName": "weak",
        "nickName": "none",
        "phoneNumber": "09876543212",
        "email": "",
        "address": "none",
        "website": "none",
        "group": "none"
    }
];
// getting array objects from local storage
// var dataStorageArray = JSON.parse(localStorage.getItem("dataStorageArray"));
// var idValueArray = JSON.parse(localStorage.getItem('idValueArray'));
// console.log(dataStorageArray);
// setDataStorage(defaultData);
// let dataStorageArray = getDataFromLocalStorage();
updateDisplay();


function setDataStorage(data) {
    localStorage.setItem("dataStorageArray", JSON.stringify(data));
}

function getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem("dataStorageArray"));
}

function getNewId() {


    let newId = 0;
    let idStorage = JSON.parse(localStorage.getItem('idValueArray'));
    let dataInStorage = JSON.parse(localStorage.getItem("dataStorageArray"));

    if (!idStorage) {

        if (dataInStorage) {
            alert('data exists')
            let idArray = dataInStorage.map(item => Number(item.id));

            let maxIdNumber = Math.max(...idArray);
            newId = maxIdNumber + 1;

            setLastId(newId);
        } else {

            newId = newId + 1;
        }
    } else {
        newId = Number(idStorage.currentId) + 1;
        setLastId(newId);

    }

    return newId;
}

function setLastId(id = 0) {

    // let idStorage = JSON.parse(localStorage.getItem('idValueArray'));

    const idObj = { currentId: id };
    localStorage.setItem("idValueArray", JSON.stringify(idObj));

}

// var lastId = 1;
// var td = 1;
document.getElementById('welcome').onclick = function welcome() {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    y.style.display = "block";
}
document.getElementById('menu').onclick = function openMenu() {
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
    z.style.display = "block";
    view.style.display = "block";
    add.style.display = "none";
}
document.getElementById('addContactLink').onclick = function addCont() {
    add.style.display = "block";
    view.style.display = "none";
    updte.style.display = "none";
}
document.getElementById('viewContactLink').onclick = function viewcont() {
    view.style.display = "block";
    add.style.display = "none";
    updte.style.display = "none";
}


let form = document.getElementById('formSubmit');

form.addEventListener("submit", function(e) {
    // console.log(form.userName);
    // e.preventDefault();
    submit();
})

// localStorage.setItem('idValueArray', JSON.stringify(idValueArray));

function submit() {
    let userName = document.getElementById('userName');
    let nickName = document.getElementById('nickName');
    let phoneNumber = document.getElementById('phoneNumber');
    let email = document.getElementById('email');
    let address = document.getElementById('address');
    let website = document.getElementById('website');
    let group = document.getElementById('group');

    if (nickName.value == '') {
        nickName.value = 'none';
    }
    if (email.value == '') {
        email.value = '';
    }
    if (address.value == '') {
        address.value = 'none';
    }
    if (website.value == '') {
        website.value = 'none';
    }
    let numberValue = phoneNumber.value
    if (numberValue.length != 11) {
        alert('Enter your correct 11 digit number');
        return;
    }
    //// updating the id numerically
    // // get last element of the array
    // var lastElement = dataStorageArray[dataStorageArray.length - 1];
    // //get index of last element and add 2 to it
    // let index = dataStorageArray.indexOf(lastElement) + 2;  
    // console.log(lastElement);
    // console.log(index);
    // //assign last element as the index
    // var lastId = index;
    // JSON.parse(localStorage.getItem('idValueArray'));



    // console.log(idValueArray);
    console.log('tag');
    let newId = getNewId();
    // idValueArray.forEach(x => {
    //     if (x.currentId >= 0) {
    //         x.currentId += 1;
    //     }
    // });
    // let result = idValueArray.map(a => a.currentId);
    // console.log(result);
    // let lastId = result[0];
    // console.log(lastId);



    // localStorage.setItem('idValue', JSON.stringify(idValueArray));

    let contact = {
        id: newId,
        userName: userName.value,
        nickName: nickName.value,
        phoneNumber: phoneNumber.value,
        email: email.value,
        address: address.value,
        website: website.value,
        group: group.value
    }
    let existingData = getDataFromLocalStorage();
    existingData.push(contact);
    setDataStorage(existingData);
    console.log('bag');
    // dataStorageArray.push(contact);
    // console.log(dataStorageArray);

    updateDisplay();
    form.reset();
}


function updateDisplay() {
    let dataStorageArray = getDataFromLocalStorage();
    var table = document.getElementById('data1');
    table.innerHTML = '';
    dataStorageArray.forEach((item) => {
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            var cell9 = row.insertCell(8);
            var btn = document.createElement('button');
            btn.innerHTML = "Delete"
            btn.type = "button";
            btn.className = "btn";
            var cell10 = row.insertCell(9);
            var btn1 = document.createElement('button');
            btn1.innerHTML = "Update"
            btn1.type = "button";
            btn1.className = "btn1";


            cell1.innerHTML = item.id;
            cell2.innerHTML = item.userName;
            cell3.innerHTML = item.nickName;
            cell4.innerHTML = item.phoneNumber;
            cell5.innerHTML = item.email;
            cell6.innerHTML = item.address;
            cell7.innerHTML = item.website;
            cell8.innerHTML = item.group;
            cell9.appendChild(btn);
            cell10.appendChild(btn1);
            view.style.display = "block";
            add.style.display = "none";
            updte.style.display = "none";

            btn.addEventListener("click", function(e) {
                deleteRow(item.id);
                updateDisplay();
            })
            btn1.addEventListener("click", function() {
                view.style.display = "none";
                updte.style.display = "block";
                add.style.display = "none";
                console.log(item.id);
                updateRow(item.id);
            })
        })
        // localStorage.setItem("dataStorageArray", JSON.stringify(dataStorageArray));
        // localStorage.setItem("idValueArray", JSON.stringify(idValueArray));

}

function updateRow(contactId) {
    let dataStorageArray = getDataFromLocalStorage();
    console.log(updateForm);

    dataStorageArray.forEach(item => {
        if (item.id === contactId) {
            document.getElementById('updateId').value = item.id;
            document.getElementById('upUserName').value = item.userName;
            document.getElementById('upNickName').value = item.nickName;
            document.getElementById('upPhoneNumber').value = item.phoneNumber;
            document.getElementById('upEmail').value = item.email;
            document.getElementById('upAddress').value = item.address;
            document.getElementById('upWebsite').value = item.website;
            document.getElementById('upGroup').value = item.group;
        }
    });
    console.log(updateForm);
}

let updateForm = document.getElementById('updateContact');
updateForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let dataStorageArray = getDataFromLocalStorage();
    var contactId = this.updateId.value;
    updateContact(contactId, this);
    console.log(dataStorageArray);
    updateDisplay();
    updateForm.reset();
    console.log(updateForm);
});


function updateContactFn(updateForm) {
    console.log(updateForm);
    var contactId = updateForm.updateId.value;
    updateContact(contactId, updateForm);
    console.log(dataStorageArray);
    updateDisplay(dataStorageArray);
    updateForm.reset();
    console.log(updateForm);
}

function updateContact(contactId, updateContactForm) {
    // let upUserName = document.getElementById('upUserName');
    // let upNickName = document.getElementById('upNickName');
    // let upPhoneNumber = document.getElementById('upPhoneNumber');
    // let upEmail = document.getElementById('upEmail');
    // let upAddress = document.getElementById('upAddress');
    // let upWebsite = document.getElementById('upWebsite');
    // let upGroup = document.getElementById('upGroup');
    let dataStorageArray = getDataFromLocalStorage();
    console.log(updateContactForm);
    dataStorageArray.forEach(item => {
        if (item.id === Number(contactId)) {
            item.userName = updateContactForm.upUserName.value;
            item.nickName = updateContactForm.upNickName.value;
            item.phoneNumber = updateContactForm.upPhoneNumber.value;
            item.email = updateContactForm.upEmail.value;
            item.address = updateContactForm.upAddress.value;
            item.website = updateContactForm.upWebsite.value;
            item.group = updateContactForm.upGroup.value;
        }
    });
    console.log(dataStorageArray);
    setDataStorage(dataStorageArray);
}

function deleteRow(id) {
    // get confirmation from user before deleting the contact
    let dataStorageArray = getDataFromLocalStorage();
    let confirmed = confirm("Are you sure you want to delete this record?");
    if (confirmed) {
        const data = dataStorageArray.map(item => {
            if (item.id === id) {
                return item.id;
            }
        })
        console.log('cat');
        const delindex = data.indexOf(id);
        dataStorageArray.splice(delindex, 1);
        setDataStorage(dataStorageArray);
    }

}