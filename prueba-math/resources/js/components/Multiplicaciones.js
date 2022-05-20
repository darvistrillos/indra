
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Multiplicaciones extends Component {


    constructor(props) {

        super(props);
        //Initialize the state in the constructor
        this.state = {
            listado: [], multliplicando: 0, multliplicador: 0, resultado: 0, registros: []
        }
    }


    /*componentDidMount() is a lifecycle method
* that gets called after the component is rendered
*/
    productoResultado() {
        fetch('/api/multiplicacion/' + multliplicando.value + '/' + multliplicador.value)
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response.producto);
                document.getElementById("resultado").textContent = "El producto es: " + response.producto;
                document.getElementById("producto").value = response.producto;
            });

    }

    componentDidMount() {
        /* fetch API in action */
        fetch('/api/multiplicacion')
            .then(response => {
                return response.json();
            })
            .then(listado => {
                //Fetched multiplicaciones is stored in the state
                this.setState({ listado });
            });


    }
    eliminarTodos = async () =>  {
        fetch("/api/multiplicacion", {
            method: "DELETE",
        })
            .then(response => {
                return false;
            })
            .then(delPosts => {
                this.setState({ listado: []});
            });

    }


    handleSubmit = event => {
        event.preventDefault();
        let newPostObj = {
            multiplicando: multliplicando.value,
            multiplicador: multliplicador.value,
            producto: producto.value
        };

        fetch("/api/multiplicacion", {
            method: "POST",
            body: JSON.stringify(newPostObj),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(newPost => {
                const registros = [...this.state.registros, newPost];
                this.setState({ registros: registros });
                fetch('/api/multiplicacion')
                    .then(response => {
                        return response.json();
                    })
                    .then(listado => {
                        //Fetched multiplicaciones is stored in the state
                        this.setState({ listado });
                    });
                this.renderListado();
            });

    };

    renderListado() {
        return this.state.listado.map(listado => {
            return (
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */

                <div className="row" key={listado.id}>
                    <div className="col-sm">
                        {listado.multiplicando} <b>X</b> {listado.multiplicador} <b>=</b> {listado.producto}
                    </div>
                </div>

            );
        })
    }


    render() {
        return (

            <div className="container">
                <div className="container fluid">
                    <h4>Multliplicaciones</h4>
                    <div className="form-group">
                        <div className='row' >
                            <label >Multiplicando</label>
                            <input type="number" id="multliplicando" name="multliplicando" onChange={(event) => this.setState({ multliplicando: event.target.value })} style={{ width: "240px" }}></input>
                        </div>
                        <div className='row'>
                            <label >Multiplicador</label>
                            <input type="number" id="multliplicador" name="multliplicador" onChange={(event) => this.setState({ multliplicador: event.target.value })} style={{ width: "240px" }}></input>
                        </div>
                        <button id="calcular" className="btn btn-primary" name="calcular" onClick={this.productoResultado}>Calcular</button>
                        <button id="grabar" className="btn btn-secondary" name="grabar" onClick={this.handleSubmit}>Grabar</button>
                    </div>
                    <input type="hidden" id="producto" name="producto"></input>
                    <div id="resultado"></div>

                </div>

                <br></br>
                <div className='text-center'><h3>Listado Multiplicaciones</h3></div>
                <div>
                    <div className="container">

                        {this.renderListado()}

                    </div>
                </div>
                <button className="btn btn-danger" onClick={this.eliminarTodos}>Eliminar</button>
            </div>


        );
    }
}

export default Multiplicaciones;

if (document.getElementById('root')) {
    ReactDOM.render(<Multiplicaciones />, document.getElementById('root'));
}
