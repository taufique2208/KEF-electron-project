

console.log('hello2');

let mentee=['Sharma Parveen Raisuddin Ansari','Aayush nitin kumbhar'];
let mentor=['Manoj Barai','Vedavathi Khade'];

let report=document.querySelector('#Reports')
let result=document.querySelector('#choice')
let add=document.querySelector('#button')

button.addEventListener('click',()=>{
    let scholarship=document.querySelector('#Scholarships')
    result.innerHTML=scholarship.options[scholarship.selectedIndex].text+" : "+report.options[report.selectedIndex].text;
});

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