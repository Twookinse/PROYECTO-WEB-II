export function UserCard({name, amount, married, address,greet}){
    console.log(name, amount, married, address, greet)
    return <div>
        <h1>{name}</h1>
        <h1>{amount}</h1>
        <h1>{married? 'married':'single'}</h1>
        <ul>
            <li>Addrees: {address.street}</li>
            <li>City: {address.city}</li>
        </ul>
    </div>
}


