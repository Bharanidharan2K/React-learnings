import React, {Component} from "react";
import './SearchBox.css';

class SearchBox extends Component{
    state ={
        where: '',
        checkIn: '',
        checkOut: '',
        guest: 0
    }

    changeWhere = (e) =>{
        this.setState({
            where : e.target.value,
        })
    }

    changeCheckIn = (e) =>{
        this.setState({
            checkIn : e.target.value,
        })
    }

    changeCheckOut = (e) =>{
        this.setState({
            checkOut : e.target.value,
        })
    }

    changeGuest = (e) =>{
        this.setState({
            guest : e.target.value,
        })
    }

    render(){
        return(
            <div className="home-search-box col m4">
                <h1>Book unique places to stay and things to do.</h1>
                <form className="search-box-form">
                    <div className="col m12">
                        <div className="form-label">Where</div>
                        <div className="input-field" id="where">
                            <input type="text" onChange={this.changeWhere} placeholder="Anywhere" value={this.state.where}/>
                        </div>
                    </div>
                    <div className="col m6">
                        <div className="form-label">Check-In</div>
                        <div className="input-field" id="where">
                            <input type="date" onChange={this.changeCheckIn} placeholder="Anywhere" value={this.state.checkIn}/>
                        </div>
                    </div>
                    <div className="col m6">
                        <div className="form-label">Check-In</div>
                        <div className="input-field" id="where">
                            <input type="date" onChange={this.changeCheckOut} placeholder="Anywhere" value={this.state.checkOut}/>
                        </div>
                    </div>
                    <div className="col m12">
                        <div className="form-label">Guest</div>
                        <div className="input-field" id="where">
                            <input type="number" onChange={this.changeGuest} placeholder="Anywhere" value={this.state.guest}/>
                        </div>
                    </div>
                    <div className="col m12 submit-btn">
                        <div className="input-field" id="submit-btn">
                            <input className="btn-large waves-effect wave-light red accent-2" type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBox;