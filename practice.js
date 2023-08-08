var form=document.querySelector("form");
var row=null;
var table = document.getElementById("table");


function Submit(){
  var dataentered=retriveData();
  var readdata=readingdatafromlocalstorage(dataentered);
  if(dataentered==false){
    msg.innerHTML="please enter the data";
  }
  else{
    if(row==null){
      insert(readdata);
      msg.innerHTML="Data Inserted";
  
    }
    else{
      update();
      msg.innerHTML="Data Updated";
    }

  }
  
  
}
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  row = null;
  msg.innerHTML = "Form Reset";
}


function retriveData(){
  var name1=document.getElementById("name").value;

  var price1=document.getElementById("price").value;
  var quan1=document.getElementById("quantity").value;
  var arr=[name1,price1,quan1];
  if(arr.includes("")){
    return false;

  }
  else{
    return arr;

  }
 

 
 
}




function readingdatafromlocalstorage(dataentered){
  var n=localStorage.setItem("Name",dataentered[0]);
  var p=localStorage.setItem("Price",dataentered[1]);
  var q=localStorage.setItem("Quantity",dataentered[2]);


 


  //getting value from local to table

  var n1=localStorage.getItem("Name",n);
  var p1=localStorage.getItem("Price",p);
  var q1=localStorage.getItem("Quantity",q);

  var arr1=[n1,p1,q1];
  return arr1;


  
}

//INSERT

function insert(readdata){
  var row=table.insertRow();
    row.insertCell(0).innerHTML=readdata[0];
    row.insertCell(1).innerHTML=readdata[1];
    row.insertCell(2).innerHTML=readdata[2];
    row.insertCell(3).innerHTML='<button onclick=edit(this)>Edit</button><button onclick=remove(this)>Delete</button>';
    resetForm();

}

//edit

function edit(tddata){
   row=tddata.parentElement.parentElement;
  document.getElementById("name").value=row.cells[0].innerHTML;
  document.getElementById("price").value=row.cells[1].innerHTML;
  document.getElementById("quantity").value=row.cells[2].innerHTML;

}

//update
function update(){
  row.cells[0].innerHTML=document.getElementById("name").value;
  row.cells[1].innerHTML=  document.getElementById("price").value;
  row.cells[2].innerHTML=document.getElementById("quantity").value;
  row=null;//asingement



}

//remove
function remove(tddata){
  confirm("Are you sure you want to delete this record");
  row=tddata.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
}






