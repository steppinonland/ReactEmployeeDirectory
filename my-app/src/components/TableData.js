import React from "react";
import sortAPI from "./sortAPI";
// https://randomuser.me/api/?results=200&nat=us
const employees = [];
export default function TableData() {
        sortAPI(employees);
        return (employees.map(function(employee){
                      return (
                          <tr data-item={employee}>
                              <td data-title="first-name">{employee.first_name}</td>
                              <td data-title="last-name">{employee.last_name}</td>
                              <td data-title="email">{employee.email}</td>
                              <td data-title="phone">{employee.phone}</td>
                              <td data-title="postcode">{employee.postcode}</td>
                          </tr>
                      );
                  })
        )
}