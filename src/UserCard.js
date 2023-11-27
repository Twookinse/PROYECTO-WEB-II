export function UserCard({name, amount, married, address }){
    console.log(name, amount, married, address)
    return (
        <div>
            <h1>{name}</h1>
            <h1>{amount}</h1>
            <h1>{married? "CASADO":"SOLTERO"}</h1>
            <ul>
                <li>address:{address.street}</li>
                <li>City:{address.city}</li>
            </ul>

        </div>
    )
}