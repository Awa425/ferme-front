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
import getAnimals from '../services/http/animal';
// import process from 'process';
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
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),

}
const Animals = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  const [dataList, setDataList] = useState([])

  // const url = "http://localhost:4000/animals"

  // useEffect(() => {
  //   getAnimals()
  // }, [])

  // const getAnimals = () => {
  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((result) => setDataList(result))
  // }
  useEffect(() => {
    getAnimals()
      .then((animals) => {
        setDataList(animals.data)
      }, [])
      .catch((error) => {
        console.log("Mes erreurs", error);
      })
  })

  const columns = [
    { title: 'Id', field: 'id' },
    { title: 'Nom', field: 'nomAnimal', validate: rowData => rowData.nomAnimal === undefined || rowData.nomAnimal === "" ? "required" : true },
    { title: 'Age', field: 'age', validate: rowData => rowData.age === undefined || rowData.age === "" ? "required" : true },
    { title: 'Couleur', field: 'couleur', validate: rowData => rowData.couleur === undefined || rowData.couleur === "" ? "required" : true },
    // { title: 'Troupeaux', field: 'troupeaux', validate: rowData => rowData.troupeaux === undefined || rowData.troupeaux === "" ? "required" : true },
  ];

  return (
    <div className="homeFarmPage">
      <section data-aos="fade-up" className="">
        <div className="addAnimal">
          <Link className="btn-product" to="/AddAnimal">Add</Link>
        </div>
        <MaterialTable key={dataList.id} icons={tableIcons} columns={columns} data={dataList} title='List Animals'
          // editable={{
          //   onRowAdd: (newData) => new Promise((resolve, reject) => {
          //     fetch(url, {
          //       method: "POST",
          //       headers: { 'content-type': 'application/json' },
          //       body: JSON.stringify(newData)
          //     }).then(res => res.json())
          //       .then(res => {
          //         getAnimals()
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
          //         getAnimals()
          //         resolve()
          //       })
          //   }),
          //   onRowDelete: (oldData) => new Promise((resolve, reject) => {
          //     fetch(url + "/" + oldData.id, {
          //       method: "DELETE",
          //       headers: { 'content-type': 'application/json' },
          //     }).then(res => res.json())
          //       .then(res => {
          //         getAnimals()
          //         resolve()
          //       })
          //   }),
          // }}
          actions={[
            {
              icon: () =>
                <Link to={`/DisplayProfile?id={dataList.id}`}><Visibility className="vert" /></Link>,
              tooltip: 'Clik me',
              onClick: (e, data) => { }
              // href={`/DisplayProfile?id={dataList.id}`}
            },
            {
              icon: () =>
                <button ><Delete className="red" /></button>,
              tooltip: 'Delete User',
              onClick: (event, data) => alert("You want to delete " + data.name)
            },
            {
              icon: () =>
                <Link to="/DisplayProfile" ><Edit className="orange" /></Link>,
              tooltip: 'Delete User',
              // onClick: (event, data) => alert("You want to delete " + data.name)
            }
          ]}
          options={{
            search: true, sorting: true, searchAutoFocus: true, searchFieldVariant: "standard", paging: true,
            pageSize: 5, paginationType: "stepped", actionsColumnIndex: -1, addRowPosition: "first", exportButton: true, exportFileName: "Liste animaux"
          }} />
      </section>
    </div>
  )
}

export default Animals
