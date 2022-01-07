import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import "./Choose.css"

const Choose = () => {
    return (
        <div className='py-5'>
            <h6 className='services'>why choose us</h6>
            <h1>Begum Art is a Trusted Printing Service</h1>
            <h6 className='text-secondary px-5'>What indication best sick be project proposal in attempt, train of the showed some a forth. That homeless, won't many of goals thoughts volumes felt.</h6>
            <div>
                <div className='container d-flex'>
                    <div className="card mx-3 " style={{ width: "18rem" }}>
                        <div className="card-body chose ">
                            <FontAwesomeIcon className='services chose  fs-1' icon={faArchive} />
                            <h5>Trusted company</h5>
                        </div>
                    </div>
                    <div className="card mx-3 " style={{ width: "18rem" }}>
                        <div className="card-body">
                            <FontAwesomeIcon className='services fs-1' icon={faArchive} />
                        </div>
                    </div>
                    <div className="card mx-3" style={{ width: "18rem" }}>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
                <div className='container d-flex my-3'>
                    <div className="card mx-3 " style={{ width: "18rem" }}>
                        <div className="card-body">

                        </div>
                    </div>
                    <div className="card mx-3 " style={{ width: "18rem" }}>
                        <div className="card-body">

                        </div>
                    </div>
                    <div className="card mx-3" style={{ width: "18rem" }}>
                        <div className="card-body">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Choose;