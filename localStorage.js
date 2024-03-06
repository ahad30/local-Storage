const handleProduct = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    productField = productName.value;
    quantityField = productQuantity.value;
    productName.value = '';
    productQuantity.value = '';
    // console.log(productField , quantityField);
    displayProduct(productField , quantityField);
}


const displayProduct = (productField , quantityField) => {
    const ul = document.getElementById('product-container')
    const li = document.createElement('li');
    li.innerText = `${productField} : ${quantityField}`;
    ul.appendChild(li);
}
