let inputs = document.querySelector("input");
let button = document.querySelector("button");
let age = document.querySelector("#age");

button.addEventListener("click" , () =>{
    if(inputs.value == ""){
        alert("Enter your Birth Date");
    }
    else{
        let original_age = find_age(inputs.value);
        age.innerText = original_age;
    }
});

function find_age(age){
    let present_date = new Date();
    let birth_date = new Date(age);
    let diff = present_date.getFullYear() - birth_date.getFullYear();
    let diff1 = present_date.getMonth() - birth_date.getMonth();
    if(diff1 < 0  || diff1 === 0 || (present_date.getDate() < birth_date.getDate())){
        diff--;
    }

    return diff;
}






