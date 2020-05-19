import React, { Fragment } from 'react';
const ProfileViewer = (props) => {
  return (
    <Fragment>
      <h1>Name:{props.name}</h1>
      <h2>Email:{props.email}</h2>
    </Fragment>
  );
};
export default ProfileViewer;
