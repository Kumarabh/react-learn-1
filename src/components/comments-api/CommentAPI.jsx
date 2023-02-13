import React, { useEffect, useState } from 'react';

function CommentAPI () {

    const [selectedCommentID, setselectedCommentID] = useState();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(selectedCommentID);
    }, [selectedCommentID])

    const getComments = async (commentId) => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId ? commentId : ''}`);
        const responseData = await data.json();
        
        setComments(Array.isArray(responseData) ? responseData.slice(0, 10) : [responseData]);

    }

    return (

        <>
        <div className="container p-4 mt-2">
        <h5 className='text-primary'>You have selected comment ID: {selectedCommentID}</h5>
        <select className='form-control w-23' name="comment" id="comment-api" onChange={($event) => setselectedCommentID($event.target.value)}>
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>

        </select>
        </div>

            <div className="container d-flex justify-content-center mt-4 border shadow-sm">
                <table className="table table-hover table-light">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">PID</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">BODY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comments.map((element, index) => {
                                return (
                                    <>
                                        <tr className='small' key={index}>
                                            <th scope="row">{element.id}</th>
                                            <td>{element.name}</td>
                                            <td>{element.postId}</td>
                                            <td>{element.email}</td>
                                            <td>{element.body}</td>

                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>



        </>
    )


}

export default CommentAPI;
