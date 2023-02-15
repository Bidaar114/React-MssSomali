import styles from './competitors.module.scss'
//import  competitors from "../../assets/competitors.json"
import Competitor from '../competitor/Competitor'
import { useSelector } from 'react-redux'




const Competitors = () => {
const {competitors} = useSelector((store)=> store.competitor)

  return (
    <div className={styles.competitors_container}>
        <div className={styles.competitors_header}>
            <span>MissSomali</span>
            <p>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Optio, aliquam. 
            </p>


        </div>
        <div className={styles.competitors}>
            {competitors.map((competitor) => (
                <Competitor competitor={competitor}/>

            ))}

        </div>
      
    </div>
  )
}

export default Competitors
