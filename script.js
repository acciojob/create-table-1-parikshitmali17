


// function insert_Row() {
//     // Get the table element
//     let table = document.getElementById("sampleTable");

//     // Create a new row
//     let newRow = document.createElement("tr");

//     // Create two new cells
//     let cell1 = document.createElement("td");
//     let cell2 = document.createElement("td");

//     // Set cell text
//     cell1.textContent = "New Cell1";
//     cell2.textContent = "New Cell2";

//     // Append cells to the new row
//     newRow.appendChild(cell1);
//     newRow.appendChild(cell2);

//     // Insert the row at the top (before the first row)
//     table.insertBefore(newRow, table.rows[0]);
// }


function insert_Row() {
    // Get the table
    let table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    let newRow = table.insertRow(0);

    // Insert new cells into the new row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Set text for the new cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}

