import { MdSpatialAudioOff, MdAttachMoney, MdMissedVideoCall} from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <MdSpatialAudioOff size={24} />
        <div className={styles.texts}>
          <span className={styles.title}>Beluga Users</span>
          <span className={styles.number}>5.482</span>
          <span className={styles.detail}>
            <span className={styles.positive}>8%</span> Mais que o mês passado
          </span>
        </div>
      </div>
      <div className={styles.item}>
        <MdAttachMoney size={24} />
        <div className={styles.texts}>
          <span className={styles.title}>Receita Total</span>
          <span className={styles.number}>R$ 750.000</span>
          <span className={styles.detail}>
            <span className={styles.positive}>2%</span> Mais que o mês passado
          </span>
        </div>
      </div>
      <div className={styles.item}>
        <MdMissedVideoCall size={24} />
        <div className={styles.texts}>
          <span className={styles.title}>Vídeos Traduzidos</span>
          <span className={styles.number}>262</span>
          <span className={styles.detail}>
            <span className={styles.negative}>4%</span> Menos que o mês passado
          </span>
        </div>
      </div>
    </div>
    
  );  
};

export default Card;