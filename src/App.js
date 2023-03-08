import React from 'react';
import {
  Home, Login, Registre, CommonDisease, Veterinarian, Farm, SinglePost,
  About, GlobalDashbord, FarmDashbord, AI, Forum, Animals, CardAll, Knowlege,
  Sensor, Bovine, ListProducts, DairySector, SuccessStory, FarmDetail,
  AccessToLiterature, Employers, AddAnimal, SensorsData, AiData, ForgetPassword,
  AnimalHealth, DisplayProfile, PostArticle, Supply, DisplaySupplier, DisplayEmployer, AddEmployer, AddSupply
} from './pages'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TroupeauxDashboardPage from './pages/TroupeauxDashboardPage';
import LogoutButton from './components/LogoutButton';


function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/membre/login" exact>
          <Login />
        </Route>
        <Route path="/membre/registre" exact>
          <Registre />
        </Route>
        <Route path="/membre/ForgetPassword" exact>
          <ForgetPassword />
        </Route>
        <Route path="/documentation/commonDisease" exact>
          <CommonDisease />
        </Route>
        <Route path="/menu/VeterinarianList" exact>
          <Veterinarian />
        </Route>
        <Route path="/menu/Veterinarinaire/:id" exact>
          <FarmDetail />
        </Route>
        <Route path="/menu/FarmList" exact>
          <Farm />
        </Route>
        <Route path="/singlePost" exact>
          <SinglePost />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/globalDashboard" exact>
          <GlobalDashbord />
        </Route>
        <Route path="/farmPage" exact>
          <FarmDashbord />
        </Route>
        <Route path="/ListAnimals" exact>
          <Animals />
        </Route>
        <Route path="/AddAnimal" exact>
          <AddAnimal />
        </Route>
        <Route path="/AddEmployer" exact>
          <AddEmployer />
        </Route>
        <Route path="/AddSupply" exact>
          <AddSupply />
        </Route>
        <Route path="/SensorsData" exact>
          <SensorsData />
        </Route>
        <Route path="/AiData" exact>
          <AiData />
        </Route>
        <Route path="/ListEmployers" exact>
          <Employers />
        </Route>
        <Route path="/SupplyManagement" exact>
          <Supply />
        </Route>
        <Route path="/documentation/usagesOfAI" exact>
          <AI />
        </Route>
        <Route path="/documentation/usagesOfSensors" exact>
          <Sensor />
        </Route>
        <Route path="/collaboration/forum" exact>
          <Forum />
        </Route>
        <Route path="/AllPost" exact>
          <CardAll />
        </Route>
        <Route path="/collaboration/KnowledgeBase" exact>
          <Knowlege />
        </Route>
        <Route path="/menu/commonDisease/BovineRestpiratoryDiseaseComplex" exact>
          <Bovine />
        </Route>
        <Route path="/order-online" exact>
          <ListProducts />
        </Route>
        <Route path="/documentation/TechnologiesInDailySector" exact>
          <DairySector />
        </Route>
        <Route path="/documentation/SuccessStory" exact>
          <SuccessStory />
        </Route>
        <Route path="/menu/vetList@1" exact>
          <FarmDetail />
        </Route>
        <Route path="/documentation/AccessToLiterature" exact>
          <AccessToLiterature />
        </Route>
        <Route path="/collaboration/forum/AnimalHealth" exact>
          <AnimalHealth />
        </Route>
        <Route path="/DisplayProfile/:id">
          <DisplayProfile />
        </Route>
        <Route path="/DisplayEmployer" exact>
          <DisplayEmployer />
        </Route>
        <Route path="/DisplaySupplier/:id" exact>
          <DisplaySupplier />
        </Route>
        <Route path="/PostArticle" exact>
          <PostArticle />
        </Route>
        <Route path="/logout" exact>
          <LogoutButton />
        </Route>
        <Route path="/troupeauxDashboardPage" exact>
          <TroupeauxDashboardPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
