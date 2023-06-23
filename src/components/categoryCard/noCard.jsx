import { toogleAddCategory } from '@/src/store/ui-slice';
import styles from './noCard.module.scss';
import { TbPlus } from 'react-icons/tb';
import { useDispatch } from 'react-redux';


const noCard = () => {
    const dispatch = useDispatch();

    return (
        <div className={styles['no-card']} onClick={() => dispatch(toogleAddCategory(null))}>
            <TbPlus className="icon" />
        </div>
    )
} 

export default noCard;