import React, { Component, useLayoutEffect } from "react";
import './ListaDeElementos.css';

export default class ListaDeElementos extends Component {
    render() {
        let cantidadElementos = this.props.cantidadElementos;
        const listItems = cantidadElementos.map((cantidadElementos) =>
            <li>Elemento {cantidadElementos}</li>
        );
        return (
            <ul className="ListaDeElementos">{listItems}</ul>
        );
    }

}