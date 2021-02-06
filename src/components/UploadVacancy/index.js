import React, {useState} from 'react';
import Layout from "../Layout";

const UploadVacancy = () => {
    const [name, setName]=useState("");
    const [description, setDescription]=useState("");
    const [label, setLabel]=useState("");
    const [labels, setLabels]=useState([]);
    const deleteLabel=(index)=>{
        const reducedArr = [...labels];
        reducedArr.splice(index, 1);
        setLabels(reducedArr);
    }
    const submitVacancy=(e)=>{
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"Nombre":name,"Descripcion":description,"Etiquetas":labels});
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://localhost:5001/Vacante", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <Layout>
            <h1>Subir Vacante</h1>
            <label>Nombre</label>
            <input type={"text"} value={name} onChange={e=>setName(e.target.value)}/>
            <label>Descripcion</label>
            <input type={"textarea"} value={description} onChange={e=>setDescription(e.target.value)}/>
            <label>Etiqueta</label>
            <input type={"text"} value={label} onChange={event => setLabel(event.target.value)}/><button onClick={()=>setLabels([...labels, label])}>+</button>
            {labels.map((label, key)=><button onClick={() => deleteLabel(key)}>{label}</button>)}
            <button onClick={submitVacancy}>Enviar</button>
        </Layout>
    );
};

export default UploadVacancy;