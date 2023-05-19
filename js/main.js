
baseUrl = "https://emp-server-app.onrender.com/api/v1/employee";

empData = async () => {
    const response = await fetch(`${baseUrl}/all`);
    const data = await response.json();
    return data;
}

empData().then(data => {
    data.forEach(element => {
        document.getElementById("empData").innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.mobile}</td>
             <td>${element.salary}</td>
        </tr>
        `;
    });

}).catch(err => {
    console.log(err);
});