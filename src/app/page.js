// import Image from "next/image";
"user client";
import userData from "./userdata.json";
import "./style.css";
import { MyComponent } from "./component.js";
const users = userData.map((user) => {
  console.log("unique key", user.id)
return <MyComponent key={user.id} props= {user} />});

export default function Home() {
  return users;
}
