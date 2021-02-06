import React, {useState, useEffect} from 'react';
import Layout from "../Layout";

const ShowVacancy = () => {
    const [vacancys, setVacancys]=useState();
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    useEffect(()=>{
        fetch("https://localhost:5001/Vacante/All", requestOptions)
            .then(response => response.text())
            .then(result => setVacancys(JSON.parse(result).data))
            .catch(error => console.log('error', error));
    },[])
    return (
        <Layout>
            <h1>Ver Vacantes</h1>
            {vacancys?vacancys.map(vacancy=><Vacancy vacanteId={vacancy.vacanteId} nombre={vacancy.nombre} descripcion={vacancy.descripcion}/>):null}
        </Layout>
    );
};

const Vacancy=({vacanteId,nombre, descripcion})=>{
    return(
        <div>
            <label>id: {vacanteId}</label><br/>
            <label>nombre: {nombre}</label><br/>
            <label>descripcion: {descripcion}</label><br/>

        </div>
    )
}

export default ShowVacancy;