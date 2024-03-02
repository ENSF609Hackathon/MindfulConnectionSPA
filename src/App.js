import {BrowserRouter, Route, Switch} from "react-router-dom";
import Demo from "./demo/Demo";
import Badge from "./pages/Badge";
import Group from "./pages/Group";
import Storie from "./pages/Storie";
import Email from "./pages/Email";
import Emailopen from "./pages/Emailopen";
import Settings from "./pages/Settings";
import Videos from "./pages/Videos";
import Analytics from "./pages/Analytics";
import Account from "./pages/Account";
import Member from "./pages/Member";
import Contactinfo from "./pages/Contactinfo";
import Socialaccount from "./pages/Socialaccount";
import Password from "./pages/Password";
import Payment from "./pages/Payment";
import Notification from "./pages/Notification";
import Helpbox from "./pages/Helpbox";

import {ResidenceList} from "./pages/ResidenceList";
import { MemoryMood } from "./pages/MemoryMood";
import { Medications } from "./pages/Medications";
import CMAI from "./pages/CMAI";

import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Notfound from "./pages/Notfound";
import ShopOne from "./pages/ShopOne";
import ShopTwo from "./pages/ShopTwo";
import ShopThree from "./pages/ShopThree";
import Singleproduct from "./pages/Singleproduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Chat from "./pages/Chat";
import Live from "./pages/Live";
import Job from "./pages/Job";
import Event from "./pages/Event";
import Hotel from "./pages/Hotel";
import Grouppage from "./pages/Grouppage";
import Userpage from "./pages/Userpage";
import Authorpage from "./pages/Authorpage";
import Comingsoon from "./pages/Comingsoon";
import Hotelsingle from "./pages/Hotelsingle";
import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import Graphs from "./pages/Graphs";
import Forum from "./pages/Forum";
import Home from "./pages/Home";

import Diary from "./pages/Diary";
import HomepageResources from "./pages/Resources";

import ProtectedRoute from "./auth/ProtectedRoute";
import {UserRoles} from './auth/authTypes';
import EducationalResources from "./pages/EducationalResources";


const App = () => {

    const { isLoading, error } = useAuth0();

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    // if (isLoading) {
    //     return <Loading />;
    // }



    return(
        <BrowserRouter basename={'/'}>
            <Switch>
                {/*<Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/>*/}
                <Route exact path={`/`} component={Home}/>
                <Route exact path={`/forum`} component={Forum}/>

                <Route exact path={`/caring`} component={ResidenceList}/>
                <Route exact path={'/memorymood'} component={MemoryMood}/>
                <Route exact path={`/knowledge`} component={HomepageResources}/>
                <Route exact path={`/cmai`} component={CMAI}/>

                <Route exact path={`/diary`} component={Diary}/>
                <Route exact path={`/educational_resources`} component={EducationalResources}/>
                <Route exact path={`/medications`} component={Medications}/>

                <Route exact path={`/defaultbadge`} component={Badge}/>
                <Route exact path={`/defaultgroup`} component={Group}/>
                <Route exact path={`/defaultstorie`} component={Storie}/>
                <Route exact path={`/defaultemailbox`} component={Email}/>
                <Route exact path={`/defaultemailopen`} component={Emailopen}/>
                <Route exact path={`/settings`} component={Settings}/>
                <Route exact path={`/defaultvideo`} component={Videos}/>
                <Route exact path={`/defaultanalytics`} component={Analytics}/>
                <Route exact path={`/accountinformation`} component={Account}/>
                <Route exact path={`/defaultmember`} component={Member}/>
                <Route exact path={`/contactinformation`} component={Contactinfo}/>
                <Route exact path={`/socialaccount`} component={Socialaccount}/>
                <Route exact path={`/password`} component={Password}/>
                <Route exact path={`/payment`} component={Payment}/>
                <Route exact path={`/defaultnoti`} component={Notification}/>
                <Route exact path={`/helpbox`} component={Helpbox}/>

                <Route exact path={`/register`} component={Register}/>
                <Route exact path={`/forgot`} component={Forgot}/>
                <Route exact path={`/notfound`} component={Notfound}/>
                <ProtectedRoute exact path={`/graphs`} component={Graphs} requiredRoles={UserRoles.PatientOrBetter}/>

                <Route exact path={`/shop1`} component={ShopOne}/>
                <Route exact path={`/shop2`} component={ShopTwo}/>
                <Route exact path={`/shop3`} component={ShopThree}/>
                <Route exact path={`/singleproduct`} component={Singleproduct}/>
                <Route exact path={`/cart`} component={Cart}/>
                <Route exact path={`/checkout`} component={Checkout}/>
                <Route exact path={`/defaultmessage`} component={Chat}/>
                <Route exact path={`/defaultlive`} component={Live}/>

                <Route exact path={`/defaultjob`} component={Job}/>
                <Route exact path={`/defaultevent`} component={Event}/>
                <Route exact path={`/defaulthotel`} component={Hotel}/>
                <Route exact path={`/grouppage`} component={Grouppage}/>
                <Route exact path={`/userpage`} component={Userpage}/>
                <Route exact path={`/userpage/:userId`} component={Userpage}/>
                <Route exact path={`/authorpage`} component={Authorpage}/>
                <Route exact path={`/comingsoon`} component={Comingsoon}/>
                <Route exact path={`/defaulthoteldetails`} component={Hotelsingle}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;