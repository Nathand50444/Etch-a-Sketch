document.addEventListener("DOMContentLoaded", function() {
    function generateGrid(rows, columns) {
        container.innerHTML = ''; 

    const container = document.getElementById("gridContainer");
    parameterButton = document.getElementById("parameters")

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
        const rowsInput = promt("Enter the number of rows:");

        if (rowsInput !== null) {
            
        }
      });
    });