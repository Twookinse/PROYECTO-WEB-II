export function Button({text, name="user"}){
    console.log(text, name)
    return <button>
        My button {text} {name}
    </button>
}
