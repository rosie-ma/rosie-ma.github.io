var arr  = [];
function CreateTable (options) {
    var contentTabel = document.createElement('div'),
        infoTable = document.createElement('table'),
        thead = document.createElement('thead'),
        tbody = document.createElement('tbody');
    contentTabel.className = 'contentTable tableItem firstTable';
    tbody.id = 'userInfoTbody';
    infoTable.className = 'infoTable';
    infoTable.id = 'myTable';
    
    options.parent.appendChild(contentTabel);
    contentTabel.appendChild(infoTable);
    infoTable.appendChild(thead);
    infoTable.appendChild(tbody);
        
    options.parent = thead;
    CreateThead (options);  
}
var searchInput = document.getElementById('searchBox')
var searchImg = document.getElementById('searchImg');
window.onclick = function() {
    searchImg.style.display = 'block';
};
searchInput.onclick = function(event){
    event.stopPropagation();
    searchImg.style.display = 'none';
};
function FilterFunction() {
  var  filter, table, tr, td, i;
  filter = searchInput.value.toUpperCase();
  table = document.getElementById('myTable');
  tr = table.getElementsByClassName('tableRow');
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByClassName('col')[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = 'none';
      }
    }       
  }
}
function CreateThead (options) {
    var tr = document.createElement('tr');
    options.parent.appendChild(tr);
        for (let i = 0; i < 7; i ++) {
            var th = document.createElement('th');
            th.className = 'th' + i;
            tr.appendChild(th);  
        }
    thId = document.getElementsByClassName('th0')[0];
    thName = document.getElementsByClassName('th1')[0];
    thSurname = document.getElementsByClassName('th2')[0];
    thAge = document.getElementsByClassName('th3')[0];
    thGender = document.getElementsByClassName('th4')[0];
    thPosition = document.getElementsByClassName('th5')[0];
    thSalary = document.getElementsByClassName('th6')[0];
    
    thId.innerText = 'ID';
    thName.innerText = 'Name';
    thSurname.innerText = 'Surname';
    thAge.innerText = 'Age';
    thGender.innerText = 'Gender';
    thPosition.innerText = 'Position';
    thSalary.innerText = 'Salary';  
    
    thName.setAttribute('onclick', "w3.sortHTML('#myTable', '.tableRow', '#td1')");
    
    thSurname.setAttribute('onclick', "w3.sortHTML('#myTable', '.tableRow', '#td2')");
}

var id = 1;

var submit = document.getElementById('submitButton');
submit.onclick = function CreateRow(options) {
    var nameInput = document.getElementById('name'),
        surnameInput = document.getElementById('surname'),
        maleGenderInput = document.getElementById('male'),
        femaleGenderInput = document.getElementById('female'),
        positionInput = document.getElementById('position'),
        salaryInput = document.getElementById('salary');
    
    var nameValue = nameInput.value,
        surnameValue = surnameInput.value,
        maleGenderValue = maleGenderInput.value,
        femaleGenderValue = femaleGenderInput.value,
        positionValue = positionInput.value,
        salaryValue = salaryInput.value,
        monthInput = document.getElementById('month'),
        dayInput = document.getElementById('date'),
        yearInput = document.getElementById('year');
    
    var containTbody = document.getElementById('userInfoTbody'),
        containTbodyFirst = document.getElementsByClassName('userInfoTbodyFirst')[0],
        containTbodySecond = document.getElementsByClassName('userInfoTbodySecond')[0];

//if (( nameInput.value == "") || (surnameInput.value == "") || (positionInput.value == "") || (monthInput.value == "") || (salaryInput.value == "") || (yearInput.value == "") || (dayInput.value == "")) {
//    showModal(); 
//    nameInput.value = "";
//    surnameInput.value = "";
//    positionInput.value = "";
//    salaryInput.value = "";
//    monthInput.value = "";
//    dayInput.value = "";
//    yearInput.value = ""; 
//    return;
//}
    
    var row = document.createElement('tr');
    row.id = 'tableRow' + id;
    row.className = 'tableRow';
    for(let i = 0; i <= 6; i++) {
        var col = document.createElement('td'),
            link = document.createElement('a');
        col.id = 'td' + i;
        col.className = 'col';
        link.className = i;
        col.appendChild(link);
        row.appendChild(col);
    }
    var tds = row.getElementsByTagName('td');
        
    var td0 = tds.td0,
        td1 = tds.td1,
        td2 = tds.td2,
        td3 = tds.td3,
        td4 = tds.td4,
        td5 = tds.td5,
        td6 = tds.td6;

    td0.innerText = id;
    id++;
    td1.innerText = nameValue;
    td2.innerText = surnameValue;
    var ageValue = CalcAge();
    td3.innerText = ageValue;
    var genderValue = GenderCheck();
    td4.innerText = genderValue;
    td5.innerText = positionValue;
    td6.innerText = salaryValue + '$';

    nameInput.value = "";
    surnameInput.value = "";
    positionInput.value = "";
    salaryInput.value = "";
    monthInput.value = "";
    dayInput.value = "";
    yearInput.value = "";
    arr.push(row);
        
    if(containTbody.childElementCount === 9) {
        containTbody.innerHTML = "";
    }
    containTbody.appendChild(row);
}
var page = document.getElementsByClassName('page');
for (let i = 0; i < page.length; i++) {
    page[i].onclick = function() {
        var tbody = document.getElementById('userInfoTbody');
        tbody.innerHTML = "";
        for(let i = (this.textContent - 1) * 9; i < this.textContent * 9 && i < arr.length; ++i) {
            tbody.appendChild(arr[i]);
        }
    }
}
    
function isDate (testDate){
  var myDate = new Date(testDate);
  var blMyResult = myDate instanceof Date && !isNaN(myDate.valueOf());
  return blMyResult;
}

function GenderCheck() {
    var radios = document.getElementsByClassName('gender');
    var found = 1;
    for (var i = 0; i < radios.length; i++) {       
        if (radios[i].checked) {
            return radios[i].value;
            found = 0;
            break;
        }
    }  
}
 function CalcAge() {
      var MM = document.getElementById('month').value,
          DD = document.getElementById('date').value,
          YYYY = document.getElementById('year').value;
      var bDay = MM + "/" + DD + "/" + YYYY;
      var birthday = new Date(bDay);  
      var today = new Date();  
      var years = today.getFullYear() - birthday.getFullYear();  
      birthday.setFullYear(today.getFullYear());  
      if (today < birthday) {  
          years--;  
      } 
      return years;
}
var overlay = document.createElement('div');
overlay.className = 'overlay';
var body = document.querySelector('body');
var modal = document.getElementById('modal');
var closeBtn = document.getElementById('modalClose'); 
function showModal() {
    modal.classList.add('isActive');
    body.appendChild(overlay);
}
function closeModal(e) {
    modal.classList.remove('isActive');
    document.body.removeChild(overlay);
}
closeBtn.addEventListener('click', closeModal);
CreateTable({ parent: document.getElementsByClassName('content')[0]});