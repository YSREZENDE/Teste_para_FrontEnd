import styles from '../../styles/products.module.css';
import Link from 'next/link'; 
import { FaArrowCircleLeft } from "react-icons/fa";
import Image from 'next/image';

export default function Product5() {
  return (
    <div className={styles.container}>
    <Link href="/">
    <h1 className={styles.Back}>
      <FaArrowCircleLeft /> 
    </h1>
    </Link>
<div className={styles.card}>
<Image 
  src="/img/Product2.png" 
  alt="Mouse Logitech" 
  width={250} 
  height={150} 
  className={styles.product} 
/>
  <h1 className={styles.title}>
  Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon, 8GB, GDDR6
  </h1>
  <div className={styles.footer}>
    <p className={styles.sale}>R$ 2.267,47</p>
    <p className={styles.price}>R$ 1.349,99</p>
    <p className={styles.desconto}>com 20% de desconto no PIX</p>

    <Link href="/products/prod5">
      <button className={styles.button}>COMPRAR</button>
    </Link>
  </div>
</div>
</div>
);
}
