// let i=1;
// function insert_Row() {
//     //Write your code here
//   let tableNode=document.getElementById("sampelTable")
// let insert=document.createElement("<tr><td>New Cell1</td></tr><tr><td>New Cell2</td></tr>")
// 	let tr=document.getElementById("tr");
// 	let td1=document.getElementById("td");
// 	let td2=document.getElementById("td");
	
// td1.innerText=`New Cell${i}`
// td2.innerText=`New Cell${i+1}`
// 	tableNode.InsertBefore(newNode,td)
	
	





	
	
	
	
// 		tableNode.appendChild(insert)
// }


function insert_Row() {
    // Get the table element
    let table = document.getElementById("sampleTable");
    
    // Create a new row element
    let newRow = document.createElement("tr");
    
    // Create two new cell elements
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");

    // Set the text content of the new cells
    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";

    // Append cells to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    // Insert the new row at the top of the table
    table.insertBefore(newRow, table.firstChild);
}
