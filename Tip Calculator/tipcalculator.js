console.log("Script Started")

function calculateTip() {

    var billamount = document.getElementById('bill_amount').value;
    var service = document.getElementById('select_tip').value;
    var people_no = document.getElementById('bill_people').value;
console.log("Value BILL --> PERCENT---> People"+" "+billamount+" "+service+" "+people_no+" " );
    // Validate  Input 

    if (billamount == " " || service == 0) {
        alert("Nachne ka Piasa lega kya");
        return;
    } 

    if(people_no ==0 || people_no<=1)
    {
        console.log("Peoples ko 1 kar diya")
        people_no=1;
        document.getElementById("peoples").style.display="none";
    }else{
        document.getElementById("peoples").style.display="block";
    }


        var total = (billamount * service) / people_no;
        total = Math.round(total * 100) / 100;
        console.log("total is " + total);
        total = total.toFixed(2);


        document.getElementById('tip_total').style.display="block";
        document.getElementById('ammount_cal').innerText=total;




};


document.getElementById("submit").onclick = function () {
    calculateTip();

};