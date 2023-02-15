import styles from './competitor.module.scss'
import { useDispatch, useSelector} from 'react-redux';
import { handleModal } from '../../features/modal/modalSlice';
import { MdHowToVote } from "react-icons/md"
import { setCurrentCompetitor } from '../../features/competitors/competitorSlice';



const Competitor = ({competitor}) => {


  const dispatch = useDispatch();

  const voteNow = () => {
    dispatch(setCurrentCompetitor(competitor))

     dispatch(handleModal());
}


    const stylesBack ={
       width: "100%",
       //hight: "500px",
        background: `linear-gradient(0deg,#128b4871,rgba(0, 0, 0, 0)68%, rgba(0, 0, 0, 0)), 
        url(${competitor.Photo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
};

       
  return (
    <div className={styles.competitor} style={stylesBack}>
        <div className={styles.info}>
            <span className={styles.name}>{competitor.FirstName +" "+ competitor.LastName}</span>
            <span className={styles.state}>{competitor.RepresentingState}</span>
            <span className={styles.vote_count}>Total Vote: {competitor.NumberofVotes}</span>

        </div >  
        <div className={styles.vote} onClick={voteNow} >
            <MdHowToVote  className={styles.vote_icon}/>
            </div>   
    </div>
  )
}

export default Competitor
