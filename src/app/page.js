// import Image from "next/image";
"user client";
// cards
// import userData from "./userdata.json";
// import "./style.css";
// import { MyComponent } from "./component.js";
// const users = userData.map((user) => {
//   console.log("unique key", user.id)
// return <MyComponent key={user.id} props= {user} />});
// export default function Home() {
//   return users;
// }
// cards section ends here

// Exercise 1
const Greeting = (props) => {
  return (
    <h2>
      Hi, {props.username}. {props.age}
    </h2>
  );
};

export default function Home() {
  // return users;
  return <Greeting username="Adiyakhuu" age={1} />;
}
