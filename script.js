document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("gridContainer");
    parameterButton = document.getElementById("parameters");

    function generateGrid(rows, columns) {
        container.innerHTML = ''; 

    for (let i = 1; i <= rows * columns; i++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid";
        container.appendChild(gridItem);
        
        gridItem.addEventListener("mouseover", function() {
            this.classList.add("hovered");
          });
      
          container.appendChild(gridItem);
        }
    }
    
parameterButton.addEventListener("click", function() {
    const rowsInput = prompt("Enter the number of rows:");

    if (rowsInput !== null) {
        const rows = parseInt(rowsInput.trim(), 10);
      
        if (!isNaN(rows) && rows > 0 && rows <= 100) {
            const columnsInput = prompt("Enter the number of columns:");
              
            if (columnsInput !== null) {
            const columns = parseInt(columnsInput.trim(), 10);
      
            if (!isNaN(columns) && columns > 0 && columns <= 100) {
                  generateGrid(rows, columns);
            } else {
                  alert("Please enter a valid number of columns.");
            }
            }
        } else {
            alert("Please enter a valid number of rows.");
        }
        }
    });
        
    generateGrid(16, 16);
});