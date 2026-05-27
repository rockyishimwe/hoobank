import {card} from "../assets";
import styles, {layout} from "../style";
import Button from "./Button";
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.       
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discover smarter ways to manage your finances with exclusive card
  benefits, lower transaction fees, and secure digital payments
  all designed to give you more control over your money.
      </p>
      <Button styles={`mt-10`}/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
