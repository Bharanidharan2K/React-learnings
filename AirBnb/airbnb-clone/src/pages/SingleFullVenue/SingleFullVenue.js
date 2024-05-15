import React, { Component } from "react";
import './SingleFullVenue.css';
import axios from "axios";
import Point from "./Point";
import Spinner from "../../utility/Spinner/Spinner";
import { connect } from "react-redux";
import openModal from "../../actions/openModal";
import { bindActionCreators } from "redux";
import Login from "../Login/Login";
import moment from "moment";
import swal from "sweetalert";
import loadScript from "../../utilityFunction/loadScript";

class SingleFullVenue extends Component{
    state = {
        singleVenue: {},
        points : [],
        checkIn: "",
        checkOut: "",
        numberOfGuests: 1,
    }

    async componentDidMount(){
        const venueId = this.props.match.params.vid;
        const url = `${window.apiHost}/venue/${venueId}`;
        const axiosResponse = await axios.get(url);
        const singleVenue = axiosResponse.data;
        
        const pointsUrl = `${window.apiHost}/points/get`;
        const pointsAxiosResponse = await axios.get(pointsUrl);

        const points = singleVenue.points.split(',').map((point, i) =>{
            return(
                <Point key={i} pointDesc={pointsAxiosResponse.data} point={point} />
            )
        })
        this.setState({
            singleVenue: singleVenue,
            points: points
        })
    }

    changeNumberOfGuests = (e)=>{this.setState({numberOfGuests: e.target.value})}
    changeCheckIn = (e)=>{this.setState({checkIn: e.target.value})}
    changeCheckOut = (e)=>{this.setState({checkOut: e.target.value})}

    reserveNow= async (e) =>{
        const startDayMoment = moment(this.state.checkIn);
        const endDayMoment = moment(this.state.checkOut);
        const diffDays = endDayMoment.diff(startDayMoment, "days");
        if(diffDays < 1) {
            swal({
                title: "Check out date must after the Check in date",
                icon: 'error'
            })
        }
        else if(isNaN(diffDays)){
            swal({
                title: "Please make sure your dates are valid",
                icon: 'error'
            })
        }
        else {
            const pricePerNight = this.state.singleVenue.pricePerNight;
            const totalPrice = pricePerNight * diffDays;
            const scriptUrl = "https://js.stripe.com/v3";
            const stripePublicKey = 'pk_test_5198HtPL5CfCPYJ3X8TTrO06ChWxotTw6Sm2el4WkYdrfN5Rh7vEuVguXyPrTezvm3ntblRX8TpjAHeMQfHkEpTA600waD2fMrT';
            await loadScript(scriptUrl);
            const stripe = window.Stripe(stripePublicKey);
        }
    }

    render(){
        console.log(this.props.auth);
        if(!this.state.singleVenue || this.state.points.length === 0){
            return(<Spinner />)
        }
        return(
            <div className="row single-venue">
                <div className="col s12 center">
                    <img className="image" src={this.state.singleVenue.imageUrl} />
                </div>
                <div className="col s8 location-details offset-s2">
                    <div className="col s8 left-details">
                        <div className="location">{this.state.singleVenue.location}</div>
                        <div className="title">{this.state.singleVenue.title}</div>
                        <div className="guests">{this.state.singleVenue.guests} - Guests</div>

                        <div className="divider"></div>

                        {this.state.points}

                        <div className="details">{this.state.singleVenue.details}</div>
                        <div className="amenities">{this.state.singleVenue.amenities}</div>
                    </div>
                    <div className="col s4 right-details">
                        <div className="price-per-day">
                            ${this.state.singleVenue.pricePerNight} <span>per day</span>
                        </div>
                        <div className="rating">
                            ${this.state.singleVenue.rating}
                        </div>
                        <div className="col s6">
                            Check-In
                            <input type="date" onChange={this.changeCheckIn} value={this.state.checkIn}/>
                        </div>
                        <div className="col s6">
                            Check-Out
                            <input type="date" onChange={this.changeCheckOut} value={this.state.checkOut}/>
                        </div>

                        <div className="col s12">
                            <select className="browser-default" onChange={this.changeNumberOfGuest}>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guest</option>
                                <option value="3">3 Guest</option>
                                <option value="4">4 Guest</option>
                                <option value="5">5 Guest</option>
                            </select>
                        </div>
                        <div className="col s12 center">
                            {this.props.auth.token ?
                                <button onClick={this.reserveNow} className="btn red accent-2">Reserve Now</button>
                                :
                                <div>You must log in to Reserve!
                                    <button className="btn red accent-2" onClick={() => { this.props.openModal('open', <Login />)}}>Login</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth,
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openModal: openModal,
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleFullVenue);