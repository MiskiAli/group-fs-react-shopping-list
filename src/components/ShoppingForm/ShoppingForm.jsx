function ShoppingForm() {

    const [newName, setNewName]= useState('');
    const [newQuantity, setNewQuantity]= useState('');
    const [newUnit, setNewUnit]= useState('');
// itemSubmit

    return (
        <>
        
        <h2>Add An Item</h2>
        {/* check in later to make sure post function name is correct */}
        <form onSubmit={itemSubmit}>
        <lable>Item: </lable>
        <input onChange= {(event) => setNewName(event.target.value)}
        value={newName}
        />
        <lable>Quantity: </lable>
        <input onChange={(event)=> setNewQuantity(event.target.value)}
        value={newQuantity}
        />
        <lable>Unit: </lable>
        <input onChange={(event)=> setNewUnit(event.target.value)}
        value={newUnit}
        />
        <button type="submit"> Save </button>
        </form>
        </>
    );

}

export default ShoppingForm;