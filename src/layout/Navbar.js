import { Menu } from 'primereact/menu'

function Navbar(){
    const items=[
        {
            label: 'Secretarias',
            command:() => console.log("Abrir secretarias")
        },
        {
            label: 'Documentos',
            command:() => console.log("Abrir Documentos")
        },
        {
            label: 'Usuários',
            command:() => console.log("Abrir Usuários")
        }
    ]

    return(
        <div>
            <Menu model={items}/>
        </div>
    )
}

export default Navbar