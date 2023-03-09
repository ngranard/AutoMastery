import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function SalesPersonList() {
    const [sales_person, setSalesPerson] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8090/api/sales-person/';
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            setSalesPerson(data.sales_person);
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const url = `http://localhost:8090/api/sales-person/${id}/`;
        const response = await fetch(url, { method: 'DELETE' });
        if(response.ok) {
            fetchData();
        } else {
            console.log(`Failed to delete sales person with ID ${id}`);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="offset-3 col-6">
                        <div className="shadow p-4 mt-4">
                            <div className="card shadow">
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Employee Number</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sales_person.map(sp => {
                                                return (
                                                    <tr key={sp.id}>
                                                        <td>{sp.name}</td>
                                                        <td>{sp.employee_number}</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger"
                                                                onClick={() => handleDelete(sp.id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <Link to="/sales-person/create" className="btn btn-primary btn-lg px-4 gap-3">Add a New Sales Person</Link>
                                </div>
                            </div>
                        <div className="col-sm">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}

export default SalesPersonList;