import style from '@/styles/tableUsers.module.css';


export const columnDefinition = [
    { key: 'id',
      dataKey: "id",
      title: "ID",
      width: 80,
      align: "center"
    },
    { width: 130,
      title: 'First Name', 
      key: 'firstName',
      dataKey: "firstName",
    },
    { key: 'lastName',
      dataKey: "lastName",
      title: "Last Name",
      width: 130
    },
    { key: 'age',
      dataKey: "age",
      title: "Age",
      width: 80
    },
    { key: 'username',
      dataKey: "username",
      title: "Username",
      width: 150,
    },
    { key: 'ip',
      dataKey: "ip",
      title: "IP",
      width: 120,
    },
    { key: 'image',
      dataKey: "image",
      title: "Image",
      width: 120,
    }
];
  

export const generateData = (columns, count = 8, dataUsers) =>
  new Array(count).fill(dataUsers).map((row, rowIndex) => {
    return columns.reduce(
      (rowData, column) => {
        rowData[column.dataKey] = column.dataKey === 'image' 
          ? <img src={`${row[rowIndex][column.dataKey] }`} alt="profile-picture" className={style.profilePicture} /> 
          : row[rowIndex][column.dataKey] 
        return {
          ...rowData,
          university: row[rowIndex].university, 
          birthDate: row[rowIndex].birthDate, 
          gender: row[rowIndex].gender,
          email: row[rowIndex].email
        };
      },
      {
        id: row[rowIndex].id,
        parentId: null
      }
    );
  });