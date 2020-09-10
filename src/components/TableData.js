import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
// https://randomuser.me/api/?results=200&nat=us
class TableData extends Component {
    constructor() {
        super();
        this.state = {
            employees: [],
            columns: [
                {
                    label: "First Name",
                    field: "first_name",
                    sort: "asc",
                    width: 100,

                },
                {
                    label: "Last Name" ,
                    field: "last_name",
                    sort: "asc",
                    width: 100,

                },
                {
                    label: "Email",
                    field: "email",
                    sort: "asc",
                    width: 100,

                },
                {
                    label: "Phone",
                    field: "phone",
                    sort: "asc",
                    width: 100,
                },
                {
                    label: "Postcode",
                    field: "postcode",
                    sort: "asc",
                    width: 100,
                },
            ]
        }
    }
    sortAPI = async () => {
        const url = `https://randomuser.me/api/?results=200&nat=us`;

        await axios
            .get(url)
            .then((res) => {
                const employeeData = [];
                for (var i = 0; i < 50; i++) {
                    var employee = {
                        first_name : res.data.results[i].name.first,
                        last_name : res.data.results[i].name.last,
                        phone : res.data.results[i].phone,
                        email : res.data.results[i].email,
                        postcode : res.data.results[i].location.postcode
                    };
                    employeeData.push(employee);
                } 
                console.log(employeeData);
                this.setState({
                    employees: employeeData,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    componentDidMount() {
        this.sortAPI();
    }
    render() {
        return (
            <MDBDataTable hover
				data={{ columns: this.state.columns, rows: this.state.employees }}
				sorting="true"
			/>
        );
    }
}

export default TableData;