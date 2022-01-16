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

