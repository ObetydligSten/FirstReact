import InventData from "../Files/invent.json";

export const InventDisplay = ()=>{
    return(
        <div>
            <div>
                <h1>Mina böcker</h1>
                {
                    InventData.böcker.map((bok)=>(
                        <div key={bok.id}>
                            <p>Författare: {bok.författare}</p>
                            <p>Titel: {bok.title}</p>
                            <p>Genre: {bok.genre}</p>
                            <p>Utgivningsår: {bok.utgivningsår}</p>
                        </div>
                    ))
                }
                <h1>Mina CD-skivor</h1>
                {
                    InventData.cdskivor.map((cd)=>(
                        <div key={cd.id}>
                            <p>Namn: {cd.cdnamn}</p>
                            <p>Genre: {cd.genre}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}