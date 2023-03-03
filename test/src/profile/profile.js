import React from 'react';

function Profile({ fullName, bio, profession, children, handleName }) {
  return (
    <div>
      <img src={children} alt="Profile picture" />
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Show name</button>
    </div>
  );
}
Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element.isRequired,
    handleName: PropTypes.func.isRequired,
  };