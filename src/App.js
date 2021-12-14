import {
  faUserAlt,
  faIdBadge,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.css";

export default function App() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faUserAlt} />
        </div>
        <h4>Profile</h4>
        <p>Click to see or edit your profile page</p>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faIdBadge} />
        </div>
        <h4>contacts</h4>
        <p>Add or change your contacts and links</p>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <h4>Favorites</h4>
        <p>Check all your Favorites in one place</p>
      </div>
    </>
  );
}
