import React, {useState} from 'react';
import Layout from "../Layout";

const UploadVacancy = () => {
    const [name, setName]=useState("");
    const [description, setDescription]=useState("");
    const [label, setLabel]=useState("");
    const [labels, setLabels]=useState([]);
    return (
        <Layout>
            <h1>Subir Vacante</h1>
            <label>Nombre</label>
            <input type={"text"} value={name} onChange={e=>setName(e.target.value)}/>
            <label>Descripcion</label>
            <input type={"textarea"}/>
            <label>Etiqueta</label>
            <input type={"text"}/><button>+</button>
            <button>Enviar</button>
        </Layout>
    );
};

export default UploadVacancy;