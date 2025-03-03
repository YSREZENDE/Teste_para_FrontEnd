import styles from '../../styles/products.module.css';
import Link from 'next/link'; 
import { FaArrowCircleLeft } from "react-icons/fa";
import Image from 'next/image';

export default function Product2() {
  return (
    <div className={styles.container}>
      <Link href="/">
      <h1 className={styles.Back}>
        <FaArrowCircleLeft /> 
      </h1>
      </Link>
      <div className={styles.cardLogi}>
        
        <Image 
          src="/img/PLogi2.png" 
          alt="Mouse Logitech" 
          width={100} 
          height={50} 
          className={styles.product} 
        />
        <div className={styles.Logi}>
          <Image 
            src="/img/logitech-logo.png" 
            alt="Logitech Logo" 
            width={20} 
            height={20} 
            className={styles.logo} 
          /> 
          <span>LOGITECH</span>
        </div>
        <h1 className={styles.titleL}>
          Mouse Gamer Sem Fio Logitech G Pro X Superlight 2 com Lightspeed, 
          32000 DPI, Sensor Hero 2, com Bateria Recarregável, Preto
        </h1>
        <div className={styles.footerL}>
          <p className={styles.saleL}>R$ 1.529,48</p>
          <p className={styles.priceL}>R$ 814,90</p>

          <Link href="#">
            <button className={styles.buttonL}>COMPRAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
