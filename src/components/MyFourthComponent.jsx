export const MyFourthComponent = () => {

    const handleClicked = (e, name) => {
        alert("Has hecho click en el botón " + name);
    }

    const handledDoubleClicked = () => {
        alert("Has hecho doble click");
    }

    const handleMouseEnter = (e) => {
        alert('Has ENTRADO a la caja');

    
    }
    const handleMouseLeave = (e) => {
        alert('Has SALIDO de la caja');
    }

    const handleMouse = (e, action) => {
        alert(`Has ${action} la caja`)
    }

    const handleInsideInput = (e) => {
        console.log("Estás dentro del input, escribe tu nombre.");
    }

    const handleOutsideInput = (e) => {
        console.log("Estás fuera del input, chaito ^^");
    }

    return (
    <div>
        <h1>MyFourthComponent</h1>
        {/* Evento click */}
        <div>
            <button 
                className="btn btn-danger"
                onClick={ () => {
                    alert("Hola, soy un evento click")
                }}
                >Haz click!
            </button>
        </div>
        <div>
            <button className="btn btn-success" onClick={ e => handleClicked(e, "David") }>
                Aquí también haz click
            </button>
        </div>
        <div>
            <button className="btn btn-light" 
            onDoubleClick={ handledDoubleClicked }>
                Haz doble click
            </button>
        </div>
        <div id="box1"
        className="mt-4"
         onMouseEnter={ e => handleMouseEnter(e) }
         onMouseLeave={ e=> handleMouseLeave(e) }
         >
            <p>Pasa el mouse por encima</p>
        </div>

        <div id='box2' className="mt-4"
            onMouseEnter={ e => handleMouse(e, "entrado a") }
            onMouseLeave={ e => handleMouse(e, "salido de") }
            >
        </div>
        
        <div className="mt-4">
            <input type="text"
                onFocus={ e => handleInsideInput(e) }
                onBlur={ e => handleOutsideInput(e) }
            />
        </div>

    </div>
  )
}
