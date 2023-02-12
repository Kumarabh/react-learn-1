import React, { useEffect, useState } from 'react'

function UserAPI() {

    const [dataResult, setDataResult] = useState([]);

    const getUserAPIData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        )
        const responseData = await response.json();
        setDataResult(responseData);
    }

    useEffect(() => {
        getUserAPIData();
    }, []) // call this api only once during init

    return (
        <>
            <div className="container d-flex justify-content-center mt-4 border shadow-sm">
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">USER NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">CONTACT</th>
                            <th scope="col">WEBSITE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataResult.map((element, index) => {
                                return (
                                    <tr className='small' key={index}>
                                    <th scope="row">{element.id}</th>
                                    <td>{element.name}</td>
                                    <td>{element.username}</td>
                                    <td>{element.email}</td>
                                    <td>{element.phone}</td>
                                    <td>{element.website}</td>

                                </tr> 
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserAPI;