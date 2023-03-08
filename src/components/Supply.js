import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Delete, Visibility } from '@material-ui/icons'
import Aos from 'aos'
import 'aos/dist/aos.css'

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
}


const Supply = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  const [dataTable, setDataTable] = useState([]);
  const url = "http://localhost:4000/fournisseurs";

  useEffect(() => {
    getFournisseurs()
  }, [])

  const getFournisseurs = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((result) => setDataTable(result))
  }

  const columns = [
    { title: 'Nom', field: 'nom', validate: rowData => rowData.nom === undefined || rowData.nom === "" ? "required" : true },
    { title: 'Prenom', field: 'prenom', validate: rowData => rowData.prenom === undefined || rowData.prenom === "" ? "required" : true },
    { title: 'Adresse', field: 'adresse', validate: rowData => rowData.adresse === undefined || rowData.adresse === "" ? "required" : true },
    { title: 'Telephone', field: 'telephone', validate: rowData => rowData.telephone === undefined || rowData.telephone === "" ? "required" : true },
    { title: 'Pays', field: 'pays', validate: rowData => rowData.pays === undefined || rowData.pays === "" ? "required" : true },
    // { title: 'Detail', render: rowData => <link href={`/DisplaySupplier?id={dataTable.id}`}>detail</link> }
  ];

  return (
    <div className="homeFarmPage">
      <section data-aos="fade-up" className="">
        <div className="addAnimal">
          <Link className="btn-product" to="/AddSupply">Add</Link>
        </div>
        <MaterialTable icons={tableIcons} columns={columns} data={dataTable} title='List Suppliers'
          // editable={{
          //   onRowAdd: (newData) => new Promise((resolve, reject) => {
          //     fetch(url, {
          //       method: "POST",
          //       headers: { 'content-type': 'application/json' },
          //       body: JSON.stringify(newData)
          //     }).then(res => res.json())
          //       .then(res => {
          //         getFournisseurs()
          //         resolve()
          //       })
          //   }),
          //   onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
          //     fetch(url + "/" + oldData.id, {
          //       method: "PUT",
          //       headers: { 'content-type': 'application/json' },
          //       body: JSON.stringify(newData)
          //     }).then(res => res.json())
          //       .then(res => {
          //         getFournisseurs()
          //         resolve()
          //       })
          //   }),
          //   onRowDelete: (oldData) => new Promise((resolve, reject) => {
          //     fetch(url + "/" + oldData.id, {
          //       method: "DELETE",
          //       headers: { 'content-type': 'application/json' },
          //     }).then(res => res.json())
          //       .then(res => {
          //         getFournisseurs()
          //         resolve()
          //       })
          //   }),
          // }}
          actions={[
            {icon:()=>
            <Link to="/DisplaySupplier" ><Visibility className="vert" /></Link>,
            tooltip:'Clik me',
            onClick:(e, data)=> console.log(data),

          },
          {
            icon: ()=>
            <button ><Delete className="red" /></button>,
            tooltip: 'Delete User',
            onClick: (event, data) => alert("You want to delete " + data.name)
          },
          {
            icon: ()=>
            <Link to="/DisplaySupplier" ><Edit className="orange" /></Link>,
            tooltip: 'Delete User',
            // onClick: (event, data) => alert("You want to delete " + data.name)
          }
          ]} 
          options={{
            search: true, sorting: true, searchAutoFocus: true, searchFieldVariant: "standard", paging: true,
            pageSize: 5, paginationType: "stepped", actionsColumnIndex: -1, exportButton: true, exportFileName: "Liste animaux", addRowPosition: "first",
          }} />
      </section>
    </div>
  )
}

export default Supply
