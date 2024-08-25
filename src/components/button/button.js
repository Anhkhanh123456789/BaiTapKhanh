import styles from './../../assets/css/button.module.css'
import './../../assets/css/button.css';
const Button =()=>{
    return (
        <button  className={styles.buttonGreen + " btn-green btn btn-primary"} >Green</button>
    );
}
export default Button;