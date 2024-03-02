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
import Home from "./pages/Home";
import ProtectedRoute from "./auth/ProtectedRoute";
import {UserRoles} from './auth/authTypes';


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

                <Route exact path={`${process.env.PUBLIC_URL}/defaultbadge`} component={Badge}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultgroup`} component={Group}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultstorie`} component={Storie}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultemailbox`} component={Email}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultemailopen`} component={Emailopen}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultsettings`} component={Settings}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultvideo`} component={Videos}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultanalytics`} component={Analytics}/>
                <Route exact path={`${process.env.PUBLIC_URL}/accountinformation`} component={Account}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultmember`} component={Member}/>
                <Route exact path={`${process.env.PUBLIC_URL}/contactinformation`} component={Contactinfo}/>
                <Route exact path={`${process.env.PUBLIC_URL}/socialaccount`} component={Socialaccount}/>
                <Route exact path={`${process.env.PUBLIC_URL}/password`} component={Password}/>
                <Route exact path={`${process.env.PUBLIC_URL}/payment`} component={Payment}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultnoti`} component={Notification}/>
                <Route exact path={`${process.env.PUBLIC_URL}/helpbox`} component={Helpbox}/>

                <Route exact path={`${process.env.PUBLIC_URL}/register`} component={Register}/>
                <Route exact path={`${process.env.PUBLIC_URL}/forgot`} component={Forgot}/>
                <Route exact path={`${process.env.PUBLIC_URL}/notfound`} component={Notfound}/>
                <ProtectedRoute exact path={`${process.env.PUBLIC_URL}/graphs`} component={Graphs} requiredRoles={UserRoles.PatientOrBetter}/>

                <Route exact path={`${process.env.PUBLIC_URL}/shop1`} component={ShopOne}/>
                <Route exact path={`${process.env.PUBLIC_URL}/shop2`} component={ShopTwo}/>
                <Route exact path={`${process.env.PUBLIC_URL}/shop3`} component={ShopThree}/>
                <Route exact path={`${process.env.PUBLIC_URL}/singleproduct`} component={Singleproduct}/>
                <Route exact path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
                <Route exact path={`${process.env.PUBLIC_URL}/checkout`} component={Checkout}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultmessage`} component={Chat}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultlive`} component={Live}/>

                <Route exact path={`${process.env.PUBLIC_URL}/defaultjob`} component={Job}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaultevent`} component={Event}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaulthotel`} component={Hotel}/>
                <Route exact path={`${process.env.PUBLIC_URL}/grouppage`} component={Grouppage}/>
                <Route exact path={`${process.env.PUBLIC_URL}/userpage`} component={Userpage}/>
                <Route exact path={`${process.env.PUBLIC_URL}/authorpage`} component={Authorpage}/>
                <Route exact path={`${process.env.PUBLIC_URL}/comingsoon`} component={Comingsoon}/>
                <Route exact path={`${process.env.PUBLIC_URL}/defaulthoteldetails`} component={Hotelsingle}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App;