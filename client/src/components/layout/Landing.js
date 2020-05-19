import React from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Profile Creator</h1>
          <p className='lead'>Create a profile</p>
          <div className='buttons'>
            <Link to='/profile' className='btn btn-primary'>
              Create Profile
            </Link>
            <Link to='/profile/me' className='btn btn-light'>
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
