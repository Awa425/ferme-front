import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import { forwardRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

const SensorsData = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  const history = useHistory()
  const [dataTable, setDataTable] = useState([
    { Sensors_Name: 'Sensor1', SensorId: 'Sen326', Type_of_data: 'Temperature', AnimalId: 'AniD321', Value: '29', Date: "10-10-2021", Hour: "13:26" },
    { Sensors_Name: 'Sensor2', SensorId: 'Sen323', Type_of_data: 'Mastitis', AnimalId: 'AniD321', Value: '29', Date: "10-10-2021", Hour: "14:13" },
    { Sensors_Name: 'Sensor3', SensorId: 'Sen329', Type_of_data: 'Temperature', AnimalId: 'AniD321', Value: '29', Date: "10-10-2021", Hour: "15:12" },
    { Sensors_Name: 'Sensor4', SensorId: 'Sen320', Type_of_data: 'Mastitis', AnimalId: 'AniD321', Value: '29', Date: "10-10-2021", Hour: "16:09" },
    { Sensors_Name: 'Sensor5', SensorId: 'Sen325', Type_of_data: 'Temperature', AnimalId: 'AniD321', Value: '28', Date: "10-10-2021", Hour: "17:05" },
    { Sensors_Name: 'Sensor6', SensorId: 'Sen322', Type_of_data: 'Mastitis', AnimalId: 'AniD321', Value: '22', Date: "10-10-2021", Hour: "18:17" },
  ]);

  const columns = [
    { title: 'Num capteur', field: 'SensorId' },
    { title: 'Nom capteur', field: 'Sensors_Name' },
    { title: 'Type de donées', field: 'Type_of_data' },
    { title: 'Animal', field: 'AnimalId'},
    { title: 'Valeur', field: 'Value' },
    { title: 'Date', field: 'Date' },
    { title: 'Heure', field: 'Hour' },
  ];

  if ((localStorage.getItem('role') == 'fermier') || (localStorage.getItem('role') == 'veterinaire')) {
    return (
      <div className="homeFarmPage">
        <section data-aos="fade-up" className="">
          {/* <div className="addAnimal">
                      <Link className="btn-product" to="/AddAnimal">Add</Link>
                    </div> */}
          <MaterialTable icons={tableIcons} columns={columns} data={dataTable} title='Data from Sensor'
            options={{
              search: true, sorting: true, searchAutoFocus: true, searchFieldVariant: "standard", paging: true,
              pageSize: 5, paginationType: "stepped", actionsColumnIndex: -1, exportButton: true, exportFileName: "données des capteurs"
            }} />
        </section>
      </div>
    )
  }
  else return history.phsh('/')
}

export default SensorsData
