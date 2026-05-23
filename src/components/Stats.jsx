import {stats} from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flx-wrap sm:mb-20 mb-6`}> 
  {stats.map((stat)=>(
    <div key={stat.id} className={`flex-1 flx justify-start items-center flex-row m-3`}>
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">{stat.value}</h4>
    </div>
  ))}
  </section>
);

export default Stats;
