function showTooltip(tooltip) {
    var tooltip = document.querySelector(tooltip); 
    tooltip.style.display = 'block';
  }
function hideTooltip(tooltip) {
    var tooltip = document.querySelector(tooltip); 
    tooltip.style.display = 'none';
}

function check_error(input,errorIcon,tooltip) 
{
        let inp=document.getElementById(input).value;
        
        
        var isNumeric = !isNaN(parseFloat(inp)) && isFinite(inp);
        var errorIcon = document.querySelector(errorIcon); 
        var tooltip = document.querySelector(tooltip); 
        if ((!isNumeric && inp !== '') || inp==="")
        { 
            errorIcon.style.display = 'inline-block';
            tooltip.style.display = 'none';
        } else {
            errorIcon.style.display = 'none';
            tooltip.style.display = 'none';
            return true;
        }
}

function check_age() {
    let age=document.getElementById('age').value;
    let errorIcon=document.querySelector('.error-icon3');
    let tooltip=document.querySelector('.tooltip3');
    if(age === 'selectage'){  
        errorIcon.style.display='inline-block';
        tooltip.style.display='none';
    }
    else{
        errorIcon.style.display = 'none';
        tooltip.style.display = 'none';
        return true;
    }
}
function validateForm() 
{
    e1=check_error('annualincome','.error-icon1','.tooltip1');
    e2=check_error('extraincome','.error-icon2','.tooltip2');
    e3=check_age();
    e4=check_error('deductions','.error-icon4','.tooltip4');
    if(e1 && e2 && e3 && e4){
        let answer=calculate();
        let result=document.getElementById('answer');
        let form=document.getElementById('form-container');
        result.innerHTML=answer;
        var modal=document.getElementById("modal");
        modal.style.display = "flex";
        return false;
        //display();
        //return true;
    }    
    
    return false;     
}

function back() {
    var modal=document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal=document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function calculate() {
    let annualincome=parseFloat(document.getElementById('annualincome').value);
    let extraincome=parseFloat(document.getElementById('extraincome').value);
    let deductions= parseFloat(document.getElementById('deductions').value);
    let age=document.getElementById('age').value;
    let overallincome= annualincome + extraincome - deductions;
    let tax;
    let answer;
    if(overallincome <= 800000){
        tax=0;
    }
    else{
        if(age =='lessthan40'){
            tax=(30*overallincome)/100;
        }
        else if(age == 'from40to60'){
            tax=(40*overallincome)/100;
        }
        else{
            tax=(10*overallincome)/100;
        }
    }
    answer = overallincome - tax;
    return answer;
}

function display() {
    let answer=calculate();
    window.open('output.html?answer=' + answer);

}


function showdescription(element) {
    let ele=document.querySelector(element);
    
    if(element == '#annualincome_des'){
        if(ele.style.display=='none')
        {
            ele.style.display="inline-block";
            ele.innerHTML="Gross annual income is your total salary in a year before any deductions";
        }
        else{
            ele.style.display="none";
        }
    }
    else if(element == '#extraincome_des'){
        if(ele.style.display=='none')
        {
            ele.style.display="inline-block";
            ele.innerHTML="Mention all the extra income that you received";
        }
        else{
            ele.style.display="none";
        }
    }
    else if(element == '#age_des'){
        if(ele.style.display=='none')
        {
            ele.style.display="inline-block";
            ele.innerHTML="Mention the age of the Employee";
        }
        else{
            ele.style.display="none";
        }
    }
    else{
        if(ele.style.display=='none')
        {
            ele.style.display="inline-block";
            ele.innerHTML="A tax deduction is a total amount an individual can claim to reduce their tax liability."
        }
        else{
            ele.style.display="none";
        }
    }
}
