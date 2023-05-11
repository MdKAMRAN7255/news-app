import * as React from 'react';
import NewsAnimation from '../newsAnimation/newsAnimation';

function BodyWrapper() {
    return ( 
        <>
            <div className="container">
                <div className="row g-0">
                    <div className="col-6">
                        <h1 className="">First</h1>
                    </div>
                    <div className="col-6">
                        <NewsAnimation />
                    </div>
                </div>
            </div>
        </>
     );
}

export default BodyWrapper;