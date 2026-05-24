import { Business } from ".";
import {features} from "../constants";
import styles,{layout} from "../style";
import Button from "./Button";
const FeatureCard = ({icon,title,content ,index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index ! == features.length-1 ? "mb-6":"mb-0"} feature-card`}>
    <div>
      
    </div>
  </div>
);
const Business = () => (
  <section>

  </section>
);
export default Business;
