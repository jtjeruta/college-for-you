import cpuBuilding from "../assets/schools/cpu_building.jpg";
import upBuilding from "../assets/schools/up_building.jpg";
import wvsuBuilding from "../assets/schools/wvsu_building.png";
import cpuLogo from "../assets/schools/cpu_logo.png";
import upLogo from "../assets/schools/up_logo.png";
import wvsuLogo from "../assets/schools/wvsu_logo.png";

const schools = [
  {
    name: "Central Philippine University",
    thumbnail: cpuLogo,
    image: cpuBuilding,
    motto: "Scientia et Fides"
  },
  {
    name: "University of the Philippines Visayas",
    thumbnail: upLogo,
    image: upBuilding,
    motto: "Honor and Excellence"
  },
  {
    name: "West Visayas State University",
    thumbnail: wvsuLogo,
    image: wvsuBuilding,
    motto: "Servitium, Concordia, Excellentia"
  }
];

export default schools;
