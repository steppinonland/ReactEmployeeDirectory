import React, { Component } from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";
// https://randomuser.me/api/?results=200&nat=us
class TableData extends Component {
    constructor() {
        super();
        this.state = {
            employees: [],
            columns: [
                {
                    text: "First Name",
                    dataField: "first_name",
                    sort: true,
                },
                {
                    text: "Last Name",
                    dataField: "last_name",
                    sort: true,
                },
                {
                    text: "Email",
                    dataField: "email",
                    sort: true,
                },
                {
                    text: "Phone",
                    dataField: "phone"
                },
                {
                    text: "Postcode",
                    dataField: "postcode",
                    sort: true,
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
        var employeeData = this.state.data;
        return (
          <Table>
              <thead>
                  <tr>
                      <th onClick={e => this.onSort(e, 'first_name')}>First Name</th>
                      <th onClick={e => this.onSort(e, 'last_name')}>Last Name</th>
                      <th onClick={e => this.onSort(e, 'email')}>Email</th>
                      <th>Phone Number</th>
                      <th onClick={e => this.onSort(e, 'postcode')}>Postcode</th>
                  </tr>
              </thead>
              <tbody>
                  {employeeData.map(function(employee){
                      return (
                          <tr data-item={employee}>
                              <td data-title="first-name">{employee.first_name}</td>
                              <td data-title="last-name">{employee.last_name}</td>
                              <td data-title="email">{employee.email}</td>
                              <td data-title="phone">{employee.phone}</td>
                              <td data-title="postcode">{employee.postcode}</td>
                          </tr>
                      );
                  })}
              </tbody>
          </Table>
        );
    }
}

export default TableData;