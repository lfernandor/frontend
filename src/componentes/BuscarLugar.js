import React, { Component } from 'react';

class BuscarLugar extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        //Tomamos el valor del input
        const termino = this.busquedaRef.current.value;

        //Lo en viamos al componente proncipal
        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">                    
                    <div className="form-group col-md-10">
                        <input ref={this.busquedaRef} type="text" className="form-control dorm-control-lg" 
                            placeholder="Ejemplo: Zirahuen" />
                    </div>
                    <div className="form-group col-md-5">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" 
                            value="Buscar..." />
                    </div>
                </div>
            </form>
        );
    }
}

export default BuscarLugar;