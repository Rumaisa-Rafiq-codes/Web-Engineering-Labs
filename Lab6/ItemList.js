function ItemList() {
    const items = ['Apple', 'Banana', 'Orange'];

    return (
        <div>
            <h2>Fruit List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;