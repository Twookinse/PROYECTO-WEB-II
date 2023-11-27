import './File.css'
export function TaskCard(ready){
    return <div className='card'>
        <h1>Mi primer tarea 1</h1>
        {
            ready==true? 'Tarea realizada':'Tarea pendiente'
        }
        <span>       
            {
                ready==true? 'Tarea realizada':'Tarea pendiente**'
            }     
        </span>
    </div>
}
//props
export function TaskCard2(props){
    return <div className='card'>
        <h1>Mi primer tarea 2</h1>
        <span>       
            {
                props.ready==true? 'Tarea realizada':'Tarea pendiente**'
            }     
        </span>
    </div>
}

//HOJAS DE STILO IF
export function TaskCard3(ready, readY){
    return <div className='card'>
        <h1>Mi primer tarea 3 </h1>
        <span style={ ready? {background:'red'}:{background:"green"}}>       
            {
                ready==true? 'Tarea realizada':' Tarea NO pendiente**'
                
            }     
            {
                readY==false? 'Tarea NO realizada':' Tarea pendiente**'
                
            }
        </span>
    </div>
}