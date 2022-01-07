import React from 'react';
import "./Bannar.css"
const Bannar = () => {
    return (
        <div className='py-5'>
            <div className="d-flex justify-content-around">
                <div className='px-5' >
                    <h1>we are digital print media agency</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam eligendi nostrum, pariatur at nam earum modi sequi architecto ratione repellat quis assumenda ipsum necessitatibus dolorum vero officia beatae quod!</p>
                    <div className='d-flex '>
                        <button type="button" className="btn know mx-5">know more  </button>
                        <button type="button" className="btn btn-light product mx-3">Our Products</button>
                    </div>
                </div>
                <div>
                    <img style={{ height: "400px" }} src='https://image.freepik.com/free-vector/printing-invoices-concept-illustration_114360-4693.jpg' alt="" />
                </div>
            </div>
            <div>


            </div>

        </div>
    );
};

export default Bannar;