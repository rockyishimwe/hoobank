import styles from "./style";
import { Billing,Business,CardDeal,Clients,CTA,Footer,Hero,Navbar,Stats,Testimonials } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>        
      </div>
    </div>
  )
}

export default App;