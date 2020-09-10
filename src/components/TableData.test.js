import React from "react";
import Table from "./TableData.js";
import axios from "axios";
import { render } from "@testing-library/react";

jest.mock(axios);

describe("Table", () => {
    test("gets data from API", async () => {
        const employees = {
            data: {
                results: [
                    {
                        firstname: { first_name: "stephanie" },
                        lastname: { last_name: "landgraf" },
                        phone: { phone: "555-555-5555" },
                        email: { email: "stlandgraf1234@gmail.com" }
                    },
                ],
            },
        };
        axios.get.mockImplementationOnce(() => Promise.resolve(employees));
        render(<Table />)
        expect(axios.get).toBeCalledWith(
            `https://randomuser.me/api/?results=200&nat=us`
        );
    });
});

export default Table;