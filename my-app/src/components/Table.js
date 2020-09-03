import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
// https://randomuser.me/api/?results=200&nat=us
class Table extends Component {
    constructor()
    super();
    state = {
        columns: {
            first_name: "first name",
            last_name: "last name",
            email: "email",
            phone: "phone"
        }
    }
    render() {
        return(
            <Table />
        );
    }
}

export default Table;
