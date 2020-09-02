import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

class Table extends Component {
    constructor()
    super();
    state = {
        columns: {
            name: "name",
            id: "id",
            phone: "phone"
        }
    }
}

export default Table;