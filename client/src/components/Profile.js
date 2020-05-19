import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactno: '',
    dob: '',
    gender: '',
    occupation: '',
  });
  const { name, email, contactno, dob, gender, occupation } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      contactno,
      dob,
      gender,
      occupation,
    };

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(newUser);
      const res = await axios.post('/api/profile', body, config);
      setFormData({
        ...formData,
        name: '',
        email: '',
        contactno: '',
        dob: '',
        gender: '',
        occupation: '',
      });
      if (res.data === 'success') {
        alert('Profile created');
      } else {
        alert(res.data);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Profile
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            onChange={(e) => onChange(e)}
            value={name}
            required
          />
        </div>
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
        <div className='form-group'>
          <input
            type='text'
            placeholder='Contact No'
            name='contactno'
            onChange={(e) => onChange(e)}
            value={contactno}
            maxLength='10'
            minLength='10'
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='date'
            placeholder='Date Of Birth'
            name='dob'
            onChange={(e) => onChange(e)}
            value={dob}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Gender'
            name='gender'
            onChange={(e) => onChange(e)}
            value={gender}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Occupation'
            name='occupation'
            onChange={(e) => onChange(e)}
            value={occupation}
            required
          />
        </div>
        <input
          type='submit'
          className='btn btn-primary'
          value='Create Profile'
        />
      </form>
    </Fragment>
  );
};
export default Profile;
