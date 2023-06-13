import styles from './noCard.module.scss';
import { TbPlus } from 'react-icons/tb';


const noCard = () => {
    return (
        <div className={styles['no-card']}>
            <TbPlus className="icon" />
        </div>
    )
} 

export default noCard;