import axios from "axios";

const sortAPI = async () => {
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
            var employees = employeeData
            console.log(employees)

        })
        .catch(function (error) {
            console.log(error);
        })
    }

export default sortAPI;