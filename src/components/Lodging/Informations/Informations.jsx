import React from 'react';
import styles from "./informations.module.scss";
import { Title, Location, Host, Tags, Rating } from "./index";
import Collapse from "../../Collapse/Collapse";

const Informations = ({ lodging }) => {
  const { title, location, host, tags, rating, description, equipments } = lodging;

  return (
    <div className={styles.informations}>
      <Title title={title} />
      <Location location={location} />
      <Host host={host} />
      <Tags tags={tags} />
      <Rating rating={rating} />
      <Collapse name="Description">
        <p>{description}</p>
      </Collapse>
      <Collapse name="Équipements">
        <ul >
          {equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
        </ul>
      </Collapse>
    </div>
  );
};

export default Informations;