import { useState } from 'react'
import BaseTable from 'react-base-table';
import 'react-base-table/styles.css';
import style from '@/styles/tableUsers.module.css';
import { columnDefinition, generateData } from '@/helpers/configTable/configTable';
import ModalUser from '@/helpers/Modal/ModalUser/ModalUser'


  
function TableUsers({ dataUsers }) { 
  const [openModal, setOpenModal] = useState({open: false, data: {}});
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const paginatedUsersData = dataUsers.slice(pagesVisited, pagesVisited + usersPerPage);

  const dataTable = generateData(columnDefinition, paginatedUsersData.length, paginatedUsersData);

  const rowEventHandlers = {
    onClick: (e) => setOpenModal({open: true, data: e.rowData})
  } 
  
  const changePage = ( buttonClicked ) => {
    const newPage = buttonClicked === 'back' ? pageNumber - 1 : pageNumber + 1;
    setPageNumber(newPage);
  };
  

  return (
    <div className={style.container}>
      { openModal.open && <ModalUser setOpenModal={setOpenModal} dataModal={openModal.data} /> }

      <BaseTable 
        data={dataTable} 
        columns={columnDefinition}
        width={700} 
        height={450}         
        className={style.table} 
        rowEventHandlers={ rowEventHandlers }
      />       

      <div className={style.wrapperButtons}>
        { pageNumber > 0 && 
          <button 
            onClick={() => changePage('back')} 
            className={style.buttonsPagination}
          >
            Back
          </button>
        }
        { dataUsers.length > 0 && (pagesVisited + 8) < dataUsers.length && 
          <button 
            onClick={() => changePage('next')} 
            className={style.buttonsPagination}
          >
            Next
          </button>
        }   
      </div>
    </div>
  )
}

export default TableUsers;