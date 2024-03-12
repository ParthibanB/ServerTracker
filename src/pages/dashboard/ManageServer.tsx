
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { serverActions } from '../../actions/ServerActions';
import { useNavigate } from 'react-router-dom';
type Props = {};
export default function ManageServerPage() {

      let rows: any = [];
      const navigate = useNavigate();
      useEffect(() => {
        const getUsers = async () => {
          var userName = localStorage.getItem("userName");
        console.log(userName);
        if (userName) {
          const getAllServers = await serverActions.getServers();
          if(getAllServers){
            alert('Reveiced all Server successfully');
            rows = getAllServers;
            console.log(rows);
         //   navigate('/dashboard/default', { state: { reg: "Dashboard" } });
          }
          else{
            alert('Server Error');
          }
        } else {
          alert('Please Login to the Application');
        }
        }; 
       }, []);      
      
  const [clickedRow, setClickedRow] = React.useState();
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, row: React.SetStateAction<undefined>) => {
    e.stopPropagation();
    console.log(row);
    setClickedRow(row);
  };

  const [file, setFile] = useState()

  function fileOnchange(event:any) {
    setFile(event.target.files[0])
  }
  const uploadBulkServer = async () => {
    
    if (file) {
      //this.setState({ submitted: true });           
      var response = await serverActions.bulkUploadServer(file);
      if(response.statusCode == 200){
        alert('Servers Uploaded successfully');
        navigate('/dashboard/manageserver', { state: { reg: "manageserver" } });
      }
      else{
        alert('Server Error');
      }
    } else {
      alert('Please upload the file');
    }
  
  };

  const columns : GridColDef[] = [
    { field: 'serverIp', headerName: 'server Ip', width: 350 },
    {
      field: 'serverUserName',
      headerName: 'server User Name',
      width: 150,
      editable: false,
    },
    {
      field: 'serverPassword',
      headerName: 'server Password',
      width: 150,
      editable: false,
    },
    {
      field: 'deleteButton',
      headerName: 'Actions',
      description: 'Actions column.',
      sortable: false,
      width: 160,
      renderCell: (params: { row: React.SetStateAction<undefined>; }) => {
        return (
          <Button
            onClick={(e) => onButtonClick(e, params.row)}
            variant="contained"
          >
            Delete
          </Button>
        );
      },
    },
  ];

   let rows1 = 
 /*   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 11, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 12, lastName: 'Frances', firstName: 'Rossini', age: 36 }
  ]; */

  [
    {
      "id":1,
        "serverIp": "http://10.109.29.202:6400/",
        "serverUserName": "CRKNET",
        "serverPassword": "NETCRK"
    },
    {   "id":2,
        "serverIp": "http://10.109.35.195/",
        "serverUserName": "U32_C5_6400",
        "serverPassword": "U32_C5_6400"
    }
]

  return (
    <><h1>
    <span style={{ textAlign: 'center' }}>Manage Server</span>
  </h1><br></br><div>
      <Box sx={{ height: 500, width: '60%' }}>
        <DataGrid
          rows={rows1}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
           />
      </Box>
      {/*  clickedRow: {clickedRow ? `${clickedRow.firstName}` : null} */}

      <h1>Bulk Upload Servers</h1>
          <input name="file" type="file" onChange={fileOnchange}/>
          <button type="submit" onClick={uploadBulkServer}>Upload</button>
    </div></>
  );
}

  


