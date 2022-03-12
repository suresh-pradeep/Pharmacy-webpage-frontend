import Table from "./Table";
import image from "/src/img/user.png";

export default function App() {
  return (
    <div className="App">
      <p align="right">
        <button>Back</button>
      </p>
      <img src={image} alt="profile_pic" />
      <p> Pharmacy </p>
      <Table />
    </div>
  );
}
