import css from './description.module.css';

export default function Description() {
  return (
    <div className={css.description}>
      <p className={css.descriptionText}>
        An application for a company providing car rental services in Ukraine
        would offer a range of features and services designed to make the car
        rental process convenient and efficient for both the company and its
        customers.
      </p>
      <p className={css.descriptionText}>
        Here's a general description of the services such an application might
        provide:
      </p>
      <p className={css.descriptionText}>
        User Registration and Profile Management. Car Selection and Booking.
        Reservation Management. Options for modifying or canceling bookings may
        be available. Digital Documentation.
      </p>
    </div>
  );
}
