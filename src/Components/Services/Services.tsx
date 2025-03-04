import { useEffect, useState } from "react";
import Card from "./Card/Card";
import styles from "./services.module.css";
import servicesData from "../../assets/Allservice.json";
import { Link } from "react-router-dom";

export interface ICards {
  cardId: number;
  productName: string;
  cardImg: string;
  price: string;
  description: string;
}
export interface IPath {
  tagline: string;
  bgImg: string;
  cards: ICards[];
}
export interface Service {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  path: IPath;
}

export default function Services() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [visibleServices, setVisibleServices] = useState<Service[]>([]);
  const initialCount = 6;
  const services: Service[] = servicesData;

  useEffect(() => {
    if (showAll) {
      setVisibleServices(services);
    } else {
      setVisibleServices(services.slice(0, initialCount));
    }
  }, [showAll, services]);

  const toggleServices = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles.services}>
      <div className={styles.firstsection}>
        <div className={styles.firstline}>
          <div className={styles.line}></div>
          <p>OUR SERVICES</p>
        </div>
        <p className={styles.line2}>Explore our Services</p>
        <p className={styles.line3}> Print Your Vision, Make It Reality!</p>
      </div>
      <div className={styles.lowersection}>
        <button
          className={`${
            showAll ? styles.customButton : styles.customButtonTwo
          } `}
          onClick={toggleServices}
        >
          <p>View</p>
          <span className={showAll ? styles.btntext : styles.btntextTwo}>
            View All Services
          </span>
        </button>
        <div className={styles.cardbox}>
          {visibleServices.map((service: Service) => (
            <div key={service.id} className={styles.cards}>
              <Link to={`/${service.name}`} style={{ textDecoration: "none" }}>
                <Card service={service} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
