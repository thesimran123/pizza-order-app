import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        🍕 Features: 📱 Easy Ordering: Order your favorite pizza with just a few
        taps. 🔥 Hot & Fresh: Enjoy piping-hot pizza delivered straight to your
        door. 👌 Customization: Customize your pizza with a wide range of
        toppings. 📦 Deals & Offers: Discover exclusive deals and special
        offers. 📍 Store Locator: Find the nearest pizza place for dine-in or
        pickup. 🌟 Loyalty Rewards: Earn rewards with every order. 💳 Secure
        Payment: Pay seamlessly with secure payment options. Join our
        pizza-loving community and elevate your pizza game today! Download the
        app and savor the perfect slice.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
