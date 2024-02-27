function addItemToOrder(name, price) {
    let orderItems = JSON.parse(localStorage.getItem('orderItems')) || [];
    orderItems.push({ name: name, price: price });
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
}
