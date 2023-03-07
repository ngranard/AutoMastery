import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom"

function AutomobileList(){
    const[automobiles, setAutomobiles] = useState([])
    const fetchData = async () => {
        const url= 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            setAutomobiles(data.autos)
        }
        }


    useEffect(() => {
        fetchData();
      }, []);

    const handleDelete = async (vin) => {
        const url = `http://localhost:8100/api/automobiles/${vin}/`;
        const response = await fetch(url, { method: 'DELETE' });
        if(response.ok) {
            fetchData();
        } else {
            console.log(`Failed to delete vehicle model with ID ${vin}`);
        }
        }

      if(automobiles === undefined) {
        return null;
    }

    return (
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <div className="offset-3 col-6">
                        <div className="card-body">
                        <h1>Vehicle Models</h1>
                            <table className="table table-striped">
                            <thead>
                                <tr>
                                <th>VIN</th>
                                <th>Color</th>
                                <th>Year</th>
                                <th>Model</th>
                                <th>Manufacturer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {automobiles.map(auto => {
                                return (
                                    <tr key={auto.vin}>
                                        <td>{auto.vin}</td>
                                        <td>{auto.color}</td>
                                        <td>{auto.year}</td>
                                        <td>{auto.model.name}</td>
                                        <td>{auto.model.manufacturer.name}</td>
                                        <td>
                                            <button type="button" className="btn btn-danger" onClick={ () => handleDelete(auto.vin)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                                })}
                            </tbody>
                            </table>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <Link to="/automobile/create" className="btn btn-primary btn-lg px-4 gap-3">Add a New Vehicle</Link>
                            </div>
                        </div>
                        <div className="col-sm">
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default AutomobileList;
