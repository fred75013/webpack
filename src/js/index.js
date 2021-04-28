import dayjs from "dayjs";
import "../sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { myFunction } from "./file2"; // Pas besoin de mettre le '.js' à la fin !
import { myObject, anotherFunction } from "./file3";

myFunction();
anotherFunction(myObject.message);

console.log(dayjs().format("MMMM DD YYYY")); // January 18 2021
console.log(dayjs().subtract(10, "days").format("DD/MM/YYYY")); // 08/01/2021

console.log(process.env.DB_PASS);
