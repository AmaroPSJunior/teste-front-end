import React from 'react';
import './styles.css'

const Pesquisar = () => (
    <div>
        <form id='pesquisar'>
            <label>
            Pesquisar:
                <input type="text" name="name" />
            </label>
            <input placeholder="Pesquisar" id="palavrachave" type="submit" value="Enviar" />
        </form>
        <div id='results'></div>
    </div>
);


export default Pesquisar;