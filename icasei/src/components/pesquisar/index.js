import React from 'react';
import './styles.css'

const Pesquisar = () => (
    <form id='pesquisar'>
        <label>
        Pesquisar:
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Enviar" />
        <input placeholder="Pesquisar" id="first_name" type="submit" value="Enviar" />
         
    </form>
);

export default Pesquisar;