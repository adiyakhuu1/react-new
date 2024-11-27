const MyComponent = (props) => {
  // console.log(props.props.firstName);
  return (
    <div className="cards">
      <div className="front" id={`front${props.props.id}`}>
        <p
          style={{ position: "absolute" }}
          className="first-name"
          id={`firstName${props.props.id}`}>
          {props.props.firstName}
        </p>
        <p
          style={{ position: "absolute" }}
          className="last-name"
          id={`lastName${props.props.id}`}>
          {props.props.lastName}
        </p>
        <p
          style={{ position: "absolute" }}
          className="email"
          id={`email${props.props.id}`}>
          {props.props.email}
        </p>
        <h3
          style={{ position: "absolute" }}
          className="companyName"
          id={`companyName${props.props.id}`}>
          {props.props.companyName}
        </h3>
        <p
          style={{ position: "absolute" }}
          className="phoneNumber"
          id={`phoneNumber${props.props.id}`}>
          {props.props.phoneNumber}
        </p>
        <p
          style={{ position: "absolute" }}
          className="address"
          id={`address${props.props.id}`}>
          {props.props.address}
        </p>
        {/* {console.log(props)} */}
      </div>
      {/* <div className="back" id={`back${card.id}`}></div> */}
    </div>
  );
};
export { MyComponent };
// MyComponent();
