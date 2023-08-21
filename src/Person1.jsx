import UpdatedComponent from "./UpdatedComponent";

const Person1 = ({ money, handleClick }) => {
  return (
    <div style={{ backgroundColor: "green", display: "inline-block" }}>
      <h2>This person has ${money} </h2>
      <button onClick={handleClick}>Add Money</button>
    </div>
  );
};

export default UpdatedComponent(Person1);
