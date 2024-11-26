import Image from "next/image";
import "./style.css";

const cards = [
  {
    id: 1,
    firstName: "Marian",
    lastName: "Dixsee",
    email: "mdixsee0@nba.com",
    companyName: "Blogtags",
    phoneNumber: "412-530-2249",
    address: "62 Meadow Ridge Plaza",
    backgroundFront: "front",
    backgroundBack: "back",
  },
  {
    id: 2,
    firstName: "Coleman",
    lastName: "Oxbie",
    email: "coxbie1@oaic.gov.au",
    companyName: "Fatz",
    phoneNumber: "592-295-2012",
    address: "18 Macpherson Place",
    backgroundFront: "front",
    backgroundBack: "back",
  },
  {
    id: 3,
    firstName: "Allx",
    lastName: "Tomasian",
    email: "atomasian2@cafepress.com",
    companyName: "Abata",
    phoneNumber: "741-828-1962",
    address: "42040 Ridgeway Trail",
    backgroundFront: "front",
    backgroundBack: "back",
  },
  {
    id: 4,
    firstName: "Jarrett",
    lastName: "Randales",
    email: "jrandales3@wiley.com",
    companyName: "Vidoo",
    phoneNumber: "401-321-9934",
    address: "595 Lakewood Street",
    backgroundFront: "front",
    backgroundBack: "back",
  },
  {
    id: 5,
    firstName: "Mora",
    lastName: "Tildesley",
    email: "mtildesley4@privacy.gov.au",
    companyName: "Shuffletag",
    phoneNumber: "254-913-7925",
    address: "7 Little Fleur Point",
    backgroundFront: "front",
    backgroundBack: "back",
  },
  {
    id: 6,
    firstName: "Livvyy",
    lastName: "Crankhorn",
    email: "lcrankhorn5@google.com.br",
    companyName: "Fivespan",
    phoneNumber: "589-951-2909",
    address: "23524 Thackeray Street",
    backgroundFront: "front",
    backgroundBack: "back",
  },
  {
    id: 7,
    firstName: "Erwin",
    lastName: "LLelweln",
    email: "ellelweln6@de.vu",
    companyName: "Cogibox",
    phoneNumber: "105-760-3548",
    address: "20 Cardinal Pass",
    backgroundFront: "front",
    backgroundBack: "back",
  },
  {
    id: 8,
    firstName: "Jourdain",
    lastName: "Leban",
    email: "jleban7@is.gd",
    companyName: "Layo",
    phoneNumber: "124-860-5889",
    address: "77 Fair Oaks Court",
    backgroundFront: "front",
    backgroundBack: "back",
  },
  {
    id: 9,
    firstName: "Christy",
    lastName: "Van Der Straaten",
    email: "cvanderstraaten8@dailymail.co.uk",
    companyName: "Linktype",
    phoneNumber: "460-169-0338",
    address: "94749 Mendota Circle",
    backgroundFront: "front",
    backgroundBack: "back",
  },
  {
    id: 10,
    firstName: "Jehanna",
    lastName: "Cleobury",
    email: "jcleobury9@huffingtonpost.com",
    companyName: "Flashpoint",
    phoneNumber: "396-811-4137",
    address: "3759 Oak Valley Park",
    backgroundFront: "front",
    backgroundBack: "back",
  },
];
const card = cards.map((card) => {
  return (
    <div className="cards">
      <div className="front" id={`front${card.id}`}>
        <p className="first-name" id={`firstName${card.id}`}>
          {card.firstName}
        </p>
        <p className="last-name" id={`lastName${card.id}`}>
          {card.lastName}
        </p>
        <p className="email" id={`email${card.id}`}>
          {card.email}
        </p>
        <h3 className="companyName" id={`companyName${card.id}`}>
          {card.companyName}
        </h3>
        <p className="phoneNumber" id={`phoneNumber${card.id}`}>
          {card.phoneNumber}
        </p>
        <p className="address" id={`address${card.id}`}>
          {card.address}
        </p>
      </div>
      <div className="back" id={`back${card.id}`}></div>
    </div>
    // <div className="cards">
    //   <div style={{backgroundImage: `url(./img/${card.backgroundFront + card.id}.png)`,}} className="front" id={`front${card.id}`}>
    //     <p className="first-name" id={`firstName${card.id}`}>
    //       {card.firstName}
    //     </p>
    //     <p className="last-name" id={`lastName${card.id}`}>
    //       {card.lastName}
    //     </p>
    //   </div>
    //   <div style={{backgroundImage: `url(${card.backgroundBack + card.id}.png)`,}} className="back" id={`back${card.id}`}></div>
    // </div>
  );
});

export default function Home() {
  return card;
}
