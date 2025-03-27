//your code here
function addItem() {
            const nameInput = document.getElementById("item-name-input");
            const priceInput = document.getElementById("item-price-input");
            const name = nameInput.value.trim();         
            const price = parseFloat(priceInput.value);

            
            if (!name || isNaN(price) || price <= 0) {
                alert("Invalid input. Please enter a valid item name and price.");
                return;
            }
            
            const cartBody = document.getElementById("cart-body");
            const row = document.createElement("tr");
            row.innerHTML = `
                <td data-ns-test="item-name">${name}</td>
                <td data-ns-test="item-price">${price.toFixed(2)}</td>
            `;
            
            cartBody.appendChild(row);
            nameInput.value = "";
            priceInput.value = "";
            
            updateTotal();
        }
        
        function updateTotal() {
            let total = 0;
            document.querySelectorAll('[data-ns-test="item-price"]').forEach(priceCell => {
                total += parseFloat(priceCell.textContent);
            });
            document.querySelector('[data-ns-test="grandTotal"]').textContent = total.toFixed(2);
        }