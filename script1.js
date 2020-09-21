function draw() { 	

	var table =document.getElementById("myTable");

    if((typeof table.rows === "undefined") == false) {
    	deleteRows();
    }

    table.addEventListener("click", function(e) { 
    	if(e.target.nodeName == "DIV") {
        if (e.target.style.backgroundColor == "white") {
            e.target.style.backgroundColor = "red";
        } else {
            e.target.style.backgroundColor = "white";
        }
    }
        
    }, false);
            
	var rowValue = document.getElementById("row");
	var columnValue = document.getElementById("column");
	var numberOfRows = parseInt(rowValue.value, 10);
	var numberOfColumns = parseInt(columnValue.value, 10);
	    	
	for(j = 0; j < numberOfRows; j+=1) {
		appendRow(numberOfColumns, j);
	}
}


function write() {
    var tbl = document.getElementById("myTable");
    var rowLength = tbl.rows.length;

    
    for (i = 0; i < rowLength; i+=1) {
        let cellLength = tbl.rows[i].cells.length;
    
        for(j = 0; j < cellLength; j++) {
        tbl.rows[i].cells[j].childNodes[0].innerHTML = (j + 1) + "" + (i + 1);
    }
    }
}


function appendRow(rowLength,j) {
    var tbl = document.getElementById("myTable");
    row = tbl.insertRow(j);        

    for (i = 0; i < rowLength; i+=1) {
        let cell = row.insertCell(i);
        var div = document.createElement("div");
        cell.appendChild(div);
    }
}

function deleteRows() {
    var tbl = document.getElementById("myTable");
    var lastRow = tbl.rows.length - 1;

    for (i = lastRow; i >= 0; i--) {
        tbl.deleteRow(i);
    }
}

