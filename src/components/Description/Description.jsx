import css from './description.module.css';

export default function Description() {
  return (
    <ul className={css.description}>
      <li className={css.descriptionText}>
        Car Rental Ukraine is your ultimate travel companion, connecting you
        with a vast fleet of vehicles across Ukraine. Whether you're a local
        looking for a reliable car for daily commuting or a traveler exploring
        Ukraine's scenic beauty, our app simplifies your car rental experience.
      </li>

      <li className={css.descriptionText}>Why Choose Car Rent Ukraine:</li>
      <li className={css.descriptionText}>
        Convenience: Rent a car within minutes, avoiding the hassle of
        traditional rental counters.
      </li>
      <li className={css.descriptionText}>
        Variety: Find the perfect car for your unique needs and preferences.
      </li>
      <li className={css.descriptionText}>
        Safety: Feel secure with safety measures and insurance coverage
        throughout your rental.
      </li>
      <li className={css.descriptionText}>
        Embark on your journey through Ukraine with ease, flexibility, and the
        confidence of a reliable car rental partner. Join our community of
        satisfied renters and experience the convenience of on-demand car
        rentals.
      </li>
    </ul>
  );
}
