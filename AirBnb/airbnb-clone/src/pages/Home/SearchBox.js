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

    submitSearch =(e) =>{
        e.preventDefault();
        this.props.history.push(`/search/${this.state.where}`)
    }

    render(){
        return(
            <div className="home-search-box col m4">
                <h1>Book unique places to stay and things to do.</h1>
                <form onSubmit={this.submitSearch} className="search-box-form">
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
                            <button className="submit-button" type="submit" >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBox;