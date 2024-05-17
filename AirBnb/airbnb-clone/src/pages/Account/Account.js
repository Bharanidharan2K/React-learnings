import React, {Component} from "react";
import './Account.css';
import { connect } from "react-redux";
import axios from "axios";
import moment from "moment";
import { Route } from "react-router-dom";
import AccountSideBar from './AccountSideBar';
import ChangePassword from './ChangePassword';
import Bookings from './Bookings';


class Account extends Component{
    state = {
        pastBookings : [],
        upcomingBooking : [],
    }

    async componentDidMount(){
        const accountUrl = `${window.apiHost}/users/getBookings`;
        const data = {
            token : this.props.auth.token,
        }
        const resp = await axios.post(accountUrl, data);
        console.log(resp.data);
        let pastBookings = [];
        let upcomingBooking = [];

        resp.data.forEach(booking => {
            const today = moment();
            const checkOutDate = moment(booking.checkOut);
            const diffDate = checkOutDate.diff(today, "days");
            if(diffDate < 0){
                pastBookings.push(booking);
            }
            else{
                upcomingBooking.push(booking);
            }
        });

        this.setState({
            pastBookings,
            upcomingBooking,
        })
    }

    render(){
        const {pastBookings, upcomingBooking} = this.state;

        return(
            <div className="account container-fluid">
                <AccountSideBar />
                <div className="row">
                    <div className="col s8 offset-s3">
                        <Route exact path="/account" render={()=>
                            <h1>Choose an option on the left!</h1>
                        } />
                        <Route exact path="/account/reservations/confirmed" render={()=>
                            <Bookings type="upcoming" bookings={upcomingBooking} token={this.props.auth.token} />
                        } />
                        <Route exact path="/account/reservations/past">
                            <Bookings type="past" bookings={pastBookings}/>
                        </Route>
                        <Route exact path="/account/change-pass" component={ChangePassword} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth : state.auth,
    }
}

export default connect(mapStateToProps)(Account);