const Profile = (props) => {
  return (
    <>
      <h2>{props.username}</h2>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </>
  );
};

export default Profile;