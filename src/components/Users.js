import React, {useState} from 'react'
import MaterialTable from 'material-table'


const Users = () => {

    const [dataTable, setDataTable] = useState([
      {id: 'Farm00534',name:'FarmBambilor',contact: '78689789' ,address: '21 rue Theze', city: 'Bambilor Dakar'},
      {id: 'Farm00534',name:'FarmBambilor',contact: '78689789' ,address: '21 rue Theze', city: 'Bambilor Dakar'},
      {id: 'Farm00534',name:'FarmBambilor',contact: '78689789' ,address: '21 rue Theze', city: 'Bambilor Dakar'},
      {id: 'Farm00534',name:'FarmBambilor',contact: '78689789' ,address: '21 rue Theze', city: 'Bambilor Dakar'},
      {id: 'Farm00534',name:'FarmBambilor',contact: '78689789' ,address: '21 rue Theze', city: 'Bambilor Dakar'},
      {id: 'Farm00534',name:'FarmBambilor',contact: '78689789' ,address: '21 rue Theze', city: 'Bambilor Dakar'},
      {id: 'Farm00534',name:'FarmBambilor',contact: '78689789' ,address: '21 rue Theze', city: 'Bambilor Dakar'},
      {id: 'Farm00534',name:'FarmBambilor',contact: '78689789' ,address: '21 rue Theze', city: 'Bambilor Dakar'},
      {id: 'Farm00534',name:'FarmBambilor',contact: '78689789' ,address: '21 rue Theze', city: 'Bambilor Dakar'},

    ])

    const columns = [
      { title: 'Id', field: 'id'},
      { title: 'Farm Name', field: 'name'},
      { title: 'Farm Contact', field: 'contact'},
      { title: 'Farm Address', field: 'address'},
      { title: 'Farm City', field: 'city'},
        
    ];
    return (
    <section className="section-center">
    <MaterialTable columns={columns} data={dataTable} title='List Farms' options={{        search:true,sorting:true,searchAutoFocus:true, searchFieldVariant:"standard", paging:true,
    pageSize:5, paginationType:"stepped"
      }}/>
    </section>
    )
}

export default Users
