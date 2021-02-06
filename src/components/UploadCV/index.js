import React, {useState} from 'react';
import Layout from "../Layout";

const UploadCV = () => {
    const [name, setName]=useState("");
    const [cv, setCv]=useState("");
    const setFile=(event)=>{
        setCv(event.target.files[0]);
    }
    const submitCV=()=>{
        var formdata = new FormData();
        formdata.append("Nombre", "Eduardo");
        formdata.append("CV", cv, `cv-${name}.pdf`);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://localhost:5001/Curriculum", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <Layout>
            <label>Nombre</label><input type={"text"} value={name} onChange={event => setName(event.target.value)}/>
            <label>Curriculum</label><input type="file" onChange={setFile}/>
            <button onClick={submitCV}>Enviar</button>
        </Layout>
    );
};

export default UploadCV;