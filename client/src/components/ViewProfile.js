import React, { Fragment, useState } from 'react';
import axios from 'axios';

const ViewProfile = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const { email } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify(newUser);
      const res = await axios.post('/api/profile/me', body, config);
      setFormData({
        ...formData,
        email: '',
      });
      if (res.data === 'Profile Not found') {
        alert(res.data);
      } else {
        alert(
          `Registered username: ${res.data.name}\nRegistered email: ${res.data.email}`
        );
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> View Your Profile
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={(e) => onChange(e)}
            value={email}
            required
          />
        </div>

        <input type='submit' className='btn btn-primary' value='View Profile' />
      </form>
    </Fragment>
  );
};
export default ViewProfile;
