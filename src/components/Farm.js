import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Visibility } from '@material-ui/icons'

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




const Farm = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  const [dataList, setDataList] = useState([])

  const url = 'https://api-ferme.onrender.com/fermes'

  useEffect(() => {
    getFermes()
  }, [])

  const getFermes = async () => {
    await fetch(url)
      .then((resp) => resp.json())
      .then((result) => setDataList(result))
  }
  const columns = [
    { title: 'Numero', field: 'id' },
    { title: 'Nom', field: 'nomFerme' },
    { title: 'Contact', field: 'contact' },
    { title: 'Adresse', field: 'adresse' },
    // { title: 'Farm City', field: 'city' },

  ];
  if (localStorage.getItem('role') == 'fermier') {
    return (
      <section data-aos="fade-up" className="section-center">
        <MaterialTable icons={tableIcons} columns={columns} data={dataList} title='Liste des fermes'
          editable={{
            onRowAdd: (newData) => new Promise((resolve, reject) => {
              fetch(url, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newData)
              }).then(res => res.json())
                .then(res => {
                  getFermes()
                  resolve()
                })
            }),
            onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
              fetch(url + "/" + oldData.id, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newData)
              }).then(res => res.json())
                .then(res => {
                  getFermes()
                  resolve()
                })
            }),
            onRowDelete: (oldData) => new Promise((resolve, reject) => {
              fetch(url + "/" + oldData.id, {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
              }).then(res => res.json())
                .then(res => {
                  getFermes()
                  resolve()
                })
            }),
          }}
          actions={[
            // {
            //   icon: () =>
            //     <Link to="/menu/vetList@1" ><Visibility className="vert" /></Link>,
            //   tooltip: 'Clik me',
            //   onClick: (e, data) => console.log(data),

            // }
          ]}
          options={{
            search: true, sorting: true, searchAutoFocus: true, searchFieldVariant: "standard", paging: true,
            pageSize: 5, paginationType: "stepped", actionsColumnIndex: -1
          }} />
      </section>
    )
  }
  else return (
    <section data-aos="fade-up" className="section-center">
      <MaterialTable icons={tableIcons} columns={columns} data={dataList} title='Liste des fermes'
        options={{
          search: true, sorting: true, searchAutoFocus: true, searchFieldVariant: "standard", paging: true,
          pageSize: 5, paginationType: "stepped", actionsColumnIndex: -1, addRowPosition: "first", exportButton: true, exportFileName: "Liste fermes"
        }} />
    </section>
  )


}

export default Farm;