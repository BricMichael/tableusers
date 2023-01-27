import React from 'react'
import style from '@/styles/modalUser.module.css'; 


function ModalUser({ dataModal, setOpenModal }) {
  return (
    <div className={style.wrapper} onClick={() => setOpenModal({open: false, data: {}})}>
        <div className={style.contentModal}> 
            <p className={style.closeButton} onClick={() => setOpenModal({open: false, data: {}})}>X</p>

            <div className={style.profilePicture}>
                <img src={dataModal.image.props.src} alt='profile-picture' /> 
                <h2>{`${dataModal.firstName} ${dataModal.lastName}`}</h2>
            </div>

            <div className={style.descriptionCard}>
                <p><b>Age:</b> {dataModal.age}</p>
                <p><b>Username:</b> {dataModal.username}</p>
                <p><b>IP</b>: {dataModal.ip}</p>
                <p><b>University</b>: {dataModal.university}</p>
                <p><b>BirthDate</b>: {dataModal.birthDate}</p>
                <p><b>Gender</b>: {dataModal.gender}</p>
                <p><b>Email</b>: {dataModal.email}</p>
            </div>
        </div>
    </div>
  )
}

export default ModalUser;