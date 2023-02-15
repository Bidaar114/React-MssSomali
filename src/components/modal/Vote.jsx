import Modal from 'react-modal';
import { useState } from 'react';
import styles from './vote.module.scss'
import { AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../store';
import { handleModal } from '../../features/modal/modalSlice';
import { addVote, dicreaesVote, increaesVote, resetState } from '../../features/competitors/competitorSlice';





const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },

  };

  
  Modal.setAppElement('#root');

const Vote = () => {

  const dispatch =
  useDispatch();

const {isOpen} = useSelector((store)=> store.modal)

const {currentCompetitor, voteCount} = useSelector((store)=> store.competitor)


  function closeModal() {
    dispatch(handleModal())
  }

  if(!currentCompetitor) return;


  const handleSubmit = (e) =>{

    e.preventDefault();

    dispatch(addVote(currentCompetitor.Id))
dispatch(resetState())

    closeModal();


  };

  const stylesBack = {
    width: "100%",
    //height: "500px",
     background: `linear-gradient(0deg,#128b4871,rgba(0, 0, 0, 0)68%, rgba(0, 0, 0, 0)), 
     url(${currentCompetitor.Photo}
     )`,
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
     borderRadius: "10px"
}


  return (
    <div>
       
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
       <div className={styles.modal_container}>

        <div className={styles.modal_info}>

            <div style={stylesBack}></div>

            <div className={styles.bio}>
                <div className={styles.devider}>
                    <label htmlFor=''> Name</label>
                    <span>{currentCompetitor.FirstName +" "+ currentCompetitor.LastName}</span>
                </div>
                <div className={styles.devider}>
                    <label htmlFor=''> State</label>
                    <span>{currentCompetitor.RepresentingState}</span>
                </div>
                <div className={styles.devider}>
                    <label htmlFor=''> Background Study</label>
                    <span>{currentCompetitor.PersonalBackground}</span>
                </div>
                <div className={styles.devider}>
                    <label htmlFor=''> Empotment School</label>
                    <span>{currentCompetitor.EmploymentorSchool}</span>
                </div>

            </div>

        </div>
        <div className={styles.vote_container}>
            <div className={styles.vote_count}>
                <span>Purchase Votes</span>
                <div className={styles.vote_control}>

                    <button > 
                        <AiFillMinusCircle className={styles.icon} onClick={()=> dispatch(dicreaesVote())}/>
                    </button>
                    <span>{voteCount}</span>

                    <button > 
                        <AiFillPlusCircle className={styles.icon} onClick={()=> dispatch(increaesVote())}/>
                    </button>
                   

                </div>

            </div>
            <form  onSubmit={handleSubmit}> 
        <span>Pay With Evc, Zaad and Sahal</span>
        <input type="number" className={styles.form_control} placeholder='Inter Your Number' />
        <button type='submit'>Submit</button>
     </form>


        </div>

    
       </div>
      </Modal>
      
    </div>
  )
}

export default Vote
