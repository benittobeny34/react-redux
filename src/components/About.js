import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = (props) => {
    return (
        <div className="container">
          <h4 className="center">About</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aspernatur rerum dolor unde iure quisquam
           tempore itaque, nemo inventore est, 
           dignissimos tenetur quas cupiditate, obcaecati dolore 
           fugit voluptatibus tempora? Ratione, ab.</p>
        </div>

    );
};

export default Rainbow(About);
