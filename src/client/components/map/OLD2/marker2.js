// import React, {useState, useEffect} from "react"; // useMap, useMapEvents
// import axios from "axios";
// import {Marker, Popup} from "react-leaflet"; // MapContainer, TileLayer
// import L from "leaflet";
// // import TreeImage0 from "../../assets/img/watercolor-tree1.png";
// import TreeImage1 from "../../assets/img/watercolor-tree2.png";
// // import TreeImageSVG from "../../assets/img/watercolor-tree-1.svg";

// const treeIcon = L.icon({
//     iconUrl: TreeImage1,
//     iconSize: [30, 40], // size of the icon
//     iconAnchor: [17, 0], // point of the icon which will correspond to marker's location
//     popupAnchor: [17, 0], // point from which the popup should open relative to the iconAnchor
// });

// function fixLatinName(treeLatinName) {
//     let latinName = treeLatinName.split(` X `)[0];
//     latinName = latinName.split(` x `)[0];
//     latinName = latinName.split(` '`)[0];
//     return latinName;
// }

// function coolName(testCoolName) {
//     if (testCoolName) {
//         return testCoolName;
//     }
//     return "a free tree";
// }

// const curLocation = [50.6283, 5.5768];
// const latMin = center => center[0] - 0.0025;
// const latMax = center => center[0] + 0.0025;
// const lonMin = center => center[1] - 0.004;
// const lonMax = center => center[1] + 0.004;

// export const GetMarker = () => {
//     // CurrentCenter, para2
//     const [error, setError] = useState(null);
//     const [treesmarker, setTreesmarker] = useState([]);
//     // const [curLocation, setCurLocation] = useState([]);

//     // if (CurrentCenter === null) {
//     //     CurrentCenter = [50.6287, 5.5767];
//     // } else {
//     //     CurrentCenter = Object.values(CurrentCenter);
//     //     console.log("TEST A1:", CurrentCenter[0]);
//     // }
//     // console.log("PAR2 : ", Object.values(para2));
//     // // setCurLocation(CurrentCenter)
//     useEffect(() => {
//         axios
//             .get("/api/trees/all")
//             .then(response => {
//                 setTreesmarker(response.data);
//             })
//             // })
//             .catch(() => {
//                 // console.log("Error retrieving data!!!");
//                 setError(error);
//                 console.log(error);
//             });
//     });

//     // function buyTree() {
//     //     console.log("Great Shot!");
//     // }

//     const TEST = treesmarker
//         .filter(
//             tree =>
//                 tree.location.coordinates[1] > lonMin(curLocation) &&
//                 tree.location.coordinates[1] < lonMax(curLocation) &&
//                 tree.location.coordinates[0] > latMin(curLocation) &&
//                 tree.location.coordinates[0] < latMax(curLocation),
//         )
//         .map(
//             tree => (
//                 console.log(tree.friendlyname),
//                 (
//                     <Marker
//                         key={tree._id}
//                         icon={treeIcon} // {randtreeIcon()}
//                         position={tree.location.coordinates}>
//                         <Popup>
//                             {"I'm "}
//                             {coolName(tree.friendlyname)}
//                             <br />
//                             <p>
//                                 {"Value : "}
//                                 {Math.ceil(tree.treevalue)}
//                                 {"🍃 leafs "}
//                             </p>
//                             <p>
//                                 {"Owner : "}
//                                 {tree.owner}
//                             </p>
//                             <p>
//                                 {fixLatinName(tree.latinName)}{" "}
//                                 <a
//                                     href={`https://en.wikipedia.org/wiki/${fixLatinName(
//                                         tree.latinName,
//                                     )}`}
//                                     target={"_blank"}
//                                     rel={"noreferrer"}>
//                                     {"Wiki info"}
//                                 </a>
//                             </p>
//                             <p>
//                                 {"tree ID : "}
//                                 {tree._id}
//                             </p>
//                             <button
//                                 type={"button"}
//                                 className={"button is-success"}>
//                                 {"Buy"}
//                             </button>
//                         </Popup>
//                     </Marker>
//                 )
//             ),
//         );
//     return TEST;
// };

// // export default {GetMarker};
