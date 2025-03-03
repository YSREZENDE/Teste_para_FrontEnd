import { Geist, Geist_Mono } from "next/font/google";
import styles from '../../test-frontend/styles/index.module.css';
import { IoPricetagOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import headerStyles from '../../test-frontend/styles/header.module.css'; 
import Header from '../components/header';
import Image from "next/image";
import Link from 'next/link'; 

export default function Home() {
  return (
    <>
    <header className={headerStyles.header}>
    </header>
    
      <div className={styles.containerName}>
            <h1><GoTrophy size={30} color="#00B5EA"/> As melhores marcas</h1>
          </div>

          <div className={styles.container}>
        <div className={styles.cardLogi}>
                
        <Image 
          src="/img/PLogi1.png" 
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
            Mouse Gamer Sem Fio Logitech G Pro X Superlight 2,Preto
          </h1>
          <div className={styles.footerL}>
            <p className={styles.saleL}>R$ 1.529,48</p>
            <p className={styles.priceL}>R$ 814,90</p>

            <Link href="/products">
              <button className={styles.buttonL}>COMPRAR</button>
            </Link>
          </div>
        </div>

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
          Mouse Gamer Sem Fio Logitech G Pro X Superlight 2,Preto
          </h1>
          <div className={styles.footerL}>
            <p className={styles.saleL}>R$ 1.529,48</p>
            <p className={styles.priceL}>R$ 814,90</p>

            <Link href="/products/prod2">
              <button className={styles.buttonL}>COMPRAR</button>
            </Link>
          </div>
        </div>
        <div className={styles.cardLogi}>
                
        <Image 
          src="/img/PLogi3.png" 
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
            Fone Gamer Sem Fio
          </h1>
          <div className={styles.footerL}>
            <p className={styles.saleL}>R$ 729,48</p>
            <p className={styles.priceL}>R$ 514,90</p>

            <Link href="/products/prod3">
              <button className={styles.buttonL}>COMPRAR</button>
            </Link>
          </div>
        </div>
        <div className={styles.cardLogi}>
                
        <Image 
          src="/img/PLogi4.png" 
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
            Caixa De Som
          </h1>
          <div className={styles.footerL}>
            <p className={styles.saleL}>R$ 2.529,48</p>
            <p className={styles.priceL}>R$ 1.514,90</p>

            <Link href="/products/prod4">
              <button className={styles.buttonL}>COMPRAR</button>
            </Link>
          </div>
        </div>
        
        </div>
        <div className={styles.containerName}>
            <h1><IoPricetagOutline size={30} color="#00B5EA"/> Descontos imperdíveis </h1>
          </div>

       <div className={styles.container}>
        <div className={styles.card}>
        <Image 
          src="/img/Product1.png" 
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
        <div className={styles.card}>
        <Image 
          src="/img/Product2.png" 
          alt="Mouse Logitech" 
          width={250} 
          height={150} 
          className={styles.product} 
        />
          <h1 className={styles.title}>
          Placa de Vídeo RX 6750XT Gaming XFX Graphics 
          Card AMD Radeon, 12GB GDDR6, Ray tracing, Fidelity FX
          </h1>
          <div className={styles.footer}>
            <p className={styles.sale}>R$ 4.229,29</p>
            <p className={styles.price}>R$ 2.999,99</p>
            <p className={styles.desconto}>com 20% de desconto no PIX</p>

            <Link href="/products/prod5">
              <button className={styles.button}>COMPRAR</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
        <Image 
          src="/img/Product3.png" 
          alt="Mouse Logitech" 
          width={250} 
          height={150} 
          className={styles.product} 
        />
          <h1 className={styles.title}>
          Placa de Vídeo RTX 4060 AERO OC Gigabyte NVIDIA GeForce,
           8GB GDDR6, RGB, DLSS, Ray Tracing, Branco
          </h1>
          <div className={styles.footer}>
            <p className={styles.sale}>R$ 3.599,99</p>
            <p className={styles.price}>R$ 2.499,99</p>
            <p className={styles.desconto}>com 20% de desconto no PIX</p>

            <Link href="/products/prod7">
              <button className={styles.button}>COMPRAR</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
        <Image 
          src="/img/Product4.png" 
          alt="Mouse Logitech" 
          width={250} 
          height={150} 
          className={styles.product} 
        />
          <h1 className={styles.title}>
          Placa de Vídeo GTX 1650 D6 Ventus XS 
          OCV3 MSI NVIDIA GeForce, 4GB GDDR6, G- Sync 
          </h1>
          <div className={styles.footer}>
            <p className={styles.sale}>R$ 947,36</p>
            <p className={styles.price}>R$ 799,99</p>
            <p className={styles.desconto}>com 20% de desconto no PIX</p>

            <Link href="/products/prod8">
              <button className={styles.button}>Comprar</button>
            </Link>
          </div>
        </div>
        <div className={styles.card}>
        <Image 
          src="/img/Product5.png" 
          alt="Mouse Logitech" 
          width={250} 
          height={150} 
          className={styles.product} 
        />
          <h1 className={styles.title}>
          Placa de Vídeo Gigabyte Radeon RX 6600 EAGLE AMD, 8GB GDDR6, Preto
          </h1>
          <div className={styles.footer}>
            <p className={styles.sale}>R$ 2.477,94</p>
            <p className={styles.price}>R$ 1.399,99</p>
            <p className={styles.desconto}>com 20% de desconto no PIX</p>

            <Link href="/products/prod9">
              <button className={styles.button}>Comprar</button>
            </Link>
          </div>
        </div>
      </div>
      

      
    </>
  );
}
