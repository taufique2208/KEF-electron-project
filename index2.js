

// console.log('hello2');

// const { fdatasync } = require("original-fs");

// const { app } = require('electron');

// let mentee=['Sharma Parveen Raisuddin Ansari','Aayush nitin kumbhar'];
// let mentor=['Manoj Barai','Vedavathi Khade'];

// let report=document.querySelector('#Reports')
// let result=document.querySelector('#choice')
// let add=document.querySelector('#button')

// button.addEventListener('click',()=>{
//     let scholarship=document.querySelector('#Scholarships')
//     result.innerHTML=scholarship.options[scholarship.selectedIndex].text+" : "+report.options[report.selectedIndex].text;
// });

// function display(){
//     var report=document.querySelector('#Reports');
//     var getreportvalue=report.value;
//     var scholarship=document.querySelector('Scholarship');
//     var getscholarshipvalue=scholarship.value
//     console.log(getreportvalue);
//     if(getreportvalue=='CallingHistory'){
//         callinghistory(getscholarshipvalue);
//     }

// }

// function callinghistory(getscholarshipvalue){

//     let report=document.createElement('label').innerHTML='Calling History';
//     var label=document.createElement('label');
//     label.textContent("Mentee");
//     var div=document.getElementById('choice');
//     div.appendChild(label);
//     div.appendChild(report);
//     div.appendChild(getscholarshipvalue);

// }


let scholarshipvalue=[
    'KEF 12+',
    'KEF 10+'
]

window.onload=()=>{
    console.log("hello")
    loadtable(scholarshipvalue);
}

function loadtable(scholarshipvalue){
    console.log("hello in loadtable")
    let tablebody=document.querySelector('#tablebody')
    let dataHTML=''
    for(let value in scholarshipvalue){
        dataHTML += `<br><tr><td><b> ${scholarshipvalue[value]}</td>
        <td>from:<input type="date" id="${value}00"></input><br>to---:<input type="date" id="${value}01"></input></td>
        <td>from:<input type="date" id="${value}10"></input><br>to---:<input type="date" id="${value}11"></input></td>
        <td>from:<input type="date" id="${value}20"></input><br>to---:<input type="date" id="${value}21"></input></td>
        <td>from:<input type="date" id="${value}30"></input><br>to---:<input type="date" id="${value}31"></input></td>
        <td>from:<input type="date" id="${value}40"></input><br>to---:<input type="date" id="${value}41"></input></td>
        <td>from:<input type="date" id="${value}50"></input><br>to---:<input type="date" id="${value}51"></input></td>
        </td></tr><br><hr>`
    }
    console.log(dataHTML)
    tablebody.innerHTML=dataHTML
}

let button=document.getElementById('button')
let reporttype=['calling report','quiz report','session report','reviewer feedback','mentee feedback','other report']
let datetype=['from','to']
button.addEventListener('click',()=>{
for(svalue in scholarshipvalue){
    for(report in reporttype){
        
            let fdata=document.getElementById(`${svalue}${report}0`).value
            let ddata=document.getElementById(`${svalue}${report}1`).value
            if (!(fdata==""&&ddata=="")){
                    console.log(scholarshipvalue[svalue],reporttype[report],fdata,ddata)
                
            }
        
    }
}
})