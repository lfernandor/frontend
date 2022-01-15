import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles'
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';


const baseUrl='https://lfrl-338303.uc.r.appspot.com/destinos/'

const useStyles = makeStyles((theme)=>({
    modal: {
        position:'absolute',
        with:500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #380e0e',
        baseShadow: theme.shadows[5],
        padding: theme.spacing(2,5,3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconos:{
        cursor: 'pointer'
    },
    inputMaterial:{
        with:'100%'
    }
}));



function Destinos(){
    const styles=useStyles();
        const [data, setData]=useState([]);
        const [modalInsertar, setModalInsertar]=useState(false);
        const [modalEditar, setModalEditar]=useState(false);
        const [modalEliminar, setModalEliminar]=useState(false);
        const [consolaSeleccionada, setConsolaSeleccionada] =useState({
        id: '',
        lugar: '',
        fecha: '',
        nombre: '',
        telefono: '',
        numPersonas: ''        
    })

    const handleChange=e=>{
        const {name, value}= e.target;
        setConsolaSeleccionada(prevState=>({
            ...prevState,
            [name]: value
        }))
        console.log(consolaSeleccionada);
    }


    const peticionGet=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
            console.log(response.data);
            setData(response.data);

        })
    }
    const peticionPost=async()=>{
        await axios.post(baseUrl, consolaSeleccionada)
        .then(response=>{       
            console.log(response.data);    
            setData(data.concat(response.data))
            abrirCerrarModalInsertar()
        })
    }
    const peticionPut=async()=>{
        await axios.put(baseUrl+consolaSeleccionada.id, consolaSeleccionada)
        .then(response=>{           
            var dataNueva=data;
            dataNueva.map(consola=>{
                if(consolaSeleccionada.id===consola.id){
                    consola.lugar=consolaSeleccionada.lugar;
                    consola.fecha=consolaSeleccionada.fecha;
                    consola.nombre=consolaSeleccionada.nombre;
                    consola.telefono=consolaSeleccionada.telefono;
                    consola.numPersonas=consolaSeleccionada.numPersonas;
                }
            })
            setData(dataNueva);
            abrirCerrarModalEditar();
        })
    }
    const peticionDelete=async()=>{
        await axios.delete(baseUrl+consolaSeleccionada.id)
        .then(response=>{
            setData(data.filter(consola=>consola.id!==consolaSeleccionada.id));
            abrirCerrarModalEliminar();
        })
    }
    const abrirCerrarModalInsertar=()=>{        
        setModalInsertar(!modalInsertar);
    }

    const abrirCerrarModalEditar=()=>{        
        setModalEditar(!modalEditar);
    }
    const abrirCerrarModalEliminar=()=>{
        setModalEliminar(!modalEliminar);
    }
    const seleccionarConsola=(consola, caso)=>{
        setConsolaSeleccionada(consola);
        (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
    }

    useEffect(async()=>{
        await peticionGet();
    },[])

    const bodyInsertar=(
        <div className={styles.modal}>
            <h3>Nuevo Destino</h3>    
            <TextField name="id" className={styles.inputMaterial} label="Id" onChange={handleChange} />
            <br />        
            <TextField name="lugar" className={styles.inputMaterial} label="Lugar" onChange={handleChange} />
            <br />
            <TextField name="fecha" className={styles.inputMaterial} label="Fecha" onChange={handleChange} />
            <br />
            <TextField name="nombre" className={styles.inputMaterial} label="Nombre" onChange={handleChange} />
            <br />
            <TextField name="telefono"className={styles.inputMaterial} label="Telefono" onChange={handleChange} />
            <br />
            <TextField name="numPersonas" className={styles.inputMaterial} label="Numero de Personas" onChange={handleChange}/>
            <br />
            <br />
            <div align="right">
                <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
                <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
            </div>
        </div>
    )

    const bodyEditar=(
        <div className={styles.modal}>
            <h3>Editar</h3>    
            <TextField name="id" className={styles.inputMaterial} label="Id" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.id} />
            <br />        
            <TextField name="lugar" className={styles.inputMaterial} label="Lugar" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.lugar} />
            <br />
            <TextField name="fecha" className={styles.inputMaterial} label="Fecha" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.fecha}/>
            <br />
            <TextField name="nombre" className={styles.inputMaterial} label="Nombre" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.nombre}/>
            <br />
            <TextField name="telefono"className={styles.inputMaterial} label="Telefono" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.telefono}/>
            <br />
            <TextField name="numPersonas" className={styles.inputMaterial} label="Numero de Personas" onChange={handleChange} value={consolaSeleccionada && consolaSeleccionada.numPersonas}/>
            <br />
            <br />
            <div align="right">
                <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
                <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
            </div>
        </div>
    )
    const bodyEliminar=(
        <div className={styles.modal}>
            <p>Deseas eliminar el destino <b>{consolaSeleccionada && consolaSeleccionada.lugar} </b> ? </p>
            <div align="right">
                <Button color="secondary" onClick={()=>peticionDelete()}>SI</Button>
                <Button onClick={()=>abrirCerrarModalEliminar()}>NO</Button>
            </div>
        </div>
    )

    return(
        
        <div>
            <h1>[ Destinos ]</h1>
            <br />
            <Button onClick={()=>abrirCerrarModalInsertar()}>[ Insertar ]</Button>
            <br /><br />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>            
                            <TableCell>Id</TableCell>                
                            <TableCell>Lugar</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Numero de Personas</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {data.map(consola=>(
                            <TableRow key ={consola.id}>
                                <TableCell>{consola.id}</TableCell>
                                <TableCell>{consola.lugar}</TableCell>
                                <TableCell>{consola.fecha}</TableCell>
                                <TableCell>{consola.nombre}</TableCell>
                                <TableCell>{consola.telefono}</TableCell>
                                <TableCell>{consola.numPersonas}</TableCell>
                                <TableCell>
                                    <Edit className={styles.iconos} onClick={()=>seleccionarConsola(consola,'Editar')} />
                                    &nbsp;&nbsp;&nbsp;
                                    <Delete className={styles.iconos} onClick={()=>seleccionarConsola(consola,'Eliminar')} />
                                    </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
            open={modalInsertar}
            onClose={abrirCerrarModalInsertar}>
                {bodyInsertar}
            </Modal>
            <Modal
            open={modalEditar}
            onClose={abrirCerrarModalEditar}>
                {bodyEditar}
            </Modal>

            <Modal 
            open={modalEliminar} 
            onClose={abrirCerrarModalEliminar}>
                {bodyEliminar}
            </Modal>
        </div>
    );
}

export default Destinos;



 /*
            <Modal
            open={modalEditar}
            onClose={abrirCerrarModalEditar}>
                {bodyEditar}
            </Modal>*/




















/*import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';

import {
    Button,
    Container,
    List,
    ListItem,
    ListSubheader,
    ListItemText,
    ListItemIcon
  } from "@material-ui/core";


class Destinos extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            edit: false,
            id: 0,
            destino1: []
        }
    }
    state = {

    }
  
    titulo = "LISTA DESTINOS";


    frmLugar = React.createRef();
    frmFecha = React.createRef();
    frmNombre = React.createRef();
    frmTelefono = React.createRef();
    frmNumPersonas = React.createRef();
    

  addDestino = event => {
    event.preventDefault();


    const data = { noControl:this.frmLugar.value, 
                    fecha:this.frmFecha.value,
                    nombre:this.frmNombre.value,
                    telefono:this.frmTelefono.value,
                    numPersonas:this.frmNumPersonas.value
                    
    }

    
    if(!this.state.edit) {
        const url ='http://localhost:4000/api2/destinos';

        axios.post(url, data)
	        .then(res => console.log(res.data));


        this.frmLugar.value = "";
        this.frmFecha.value = "";
        this.frmNombre.value = "";
        this.frmTelefono.value = "";
        this.frmNumPersonas.value = "";
        
        this.frmLugar.focus();
        this.frmFecha.focus();
        this.frmNombre.focus();
        this.frmTelefono.focus();
        this.frmNumPersonas.focus();
       
    }
    else {

        const url ='http://localhost:4000/api2/destinos'+this.state.id;

        const data = { noControl:this.frmLugar.value, 
            fecha:this.frmFecha.value,
            nombre:this.frmNombre.value,
            telefono:this.frmTelefono.value,
            numPersonas:this.frmNumPersonas.value
         }

        axios.put(url, data)
            .then(res => console.log(res.data));
        
        console.log(url);
    
        }
    

        this.loadDestino();
    
  }

  viewDestino = (id) => event => {
    event.preventDefault();


    this.frmLugar.value = "";
    this.frmFecha.value = "";
    this.frmNombre.value = "";
    this.frmTelefono.value = "";
    this.frmNumPersonas.value = "";
    this.frmLugar.focus();
    this.frmFescha.focus();    
    this.frmNombre.focus();
    this.frmTelefono.focus();        
    this.frmNumPersonas.focus();    
    this.frmLugar.value = this.state.destinos[id];
  }


  editDestino = (id, row) => event => {
    event.preventDefault();

    var newState = this.state;
    newState.edit = true;
    newState.id = id;

    this.setState(newState);

    this.frmLugar.focus();
    this.frmLugar.value = this.state.destinos1[row].lugar;
    this.frmFecha.focus();
    this.frmFecha.value = this.state.destinos1[row].fecha;
    this.frmNombre.focus();
    this.frmNombre.value = this.state.destinos1[row].nombre;
    this.frmTelefono.focus();
    this.frmTelefono.value = this.state.destinos1[row].telefono;
    this.frmNumPersonas.focus();
    this.frmNumPersonas.value = this.state.destinos1[row].numPersonas;
   

  }

  deleteDestino = (id) => event => {
        event.preventDefault();

        const url ='http://localhost:4000/api2/destinos'+id;

        axios.delete(url)
            .then(res => console.log(res.data));
        
        
        this.loadDestino();
        
        console.log(url);
    }  

  loadDestino () {

    axios.get('http://localhost:4000/api2/destinos')
    .then(res => {
      //const emps = res.data;
      this.setState({ destinos1: res.data });
      console.log(res.data);
    })



  }

  componentDidMount() {
    this.loadDestino();
  }
  

    render() { 
        return ( 
            <div className="api2">
            <Container maxWidth="xs">
                <Link to="/">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<HomeIcon />}
                    >
                    Regresar
                    </Button>
                </Link>
            </Container>
                <form autoComplete="off" onSubmit={this.addDestino}>    
                    <TextField
                        label="Lugar"
                        type="text"                        
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmLugar = e)}
                    />
                    <TextField
                        label="Fecha"
                        type="date"                        
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmFecha = e)}
                    />                   
                    <TextField                        
                        label="Nombre"
                        type="text"                        
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmNombre = e)}
                    />
                    <TextField                        
                        label="Telefono"
                        type="text"                        
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmTelefono = e)}
                    />
                    <TextField         
                        label="NumPersonas"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        inputRef={e => (this.frmNumPersonas = e)}
                    />
                    <Fab
                        color="primary"
                        size="medium"
                        //className="dish-form-icon"
                        onClick={this.addAlumno}
                    >
                        <AddIcon />
                    </Fab>
                </form>

                <List
                    component="nav"
                    subheader={<ListSubheader component="div">{ this.titulo }</ListSubheader>}
                    >
                    {this.state.destinos1.map((destino, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon onClick={this.viewDestino(index)}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText inset primary={destino.Lugar} />
                            <ListItemText inset primary={destino.fecha} />
                            <ListItemText inset primary={destino.nombre} />
                            <ListItemText inset primary={destino.telefono} />
                            <ListItemText inset primary={destino.numPersonas} />
                            <ListItemIcon onClick={this.editDestino(destino.id, index)}>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemIcon onClick={this.deleteDestino(destino.id)}>
                                <DeleteIcon />
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>



            </div>
         );
    }
}
 
export default Destinos;*/