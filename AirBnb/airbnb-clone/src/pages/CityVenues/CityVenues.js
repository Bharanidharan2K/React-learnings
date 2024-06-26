import React, { Component } from 'react';
import './CityVenues.css';
import axios from 'axios';
import Spinner from '../../utility/Spinner/Spinner';
import Venues from '../../utility/Venue/Venues';

class CityVenues extends Component{

    state = {
        venues: [],
        header: ''
    }
    async componentDidMount(){
        const cityName = this.props.match.params.cityName;
        const url = `${window.apiHost}/venues/city/${cityName}`;
        const resp = await axios.get(url, {cityName});
        this.setState({
            venues: resp.data.venues,
            header: resp.data.header
        })
    }
    render(){
        if(!this.state.header){
            return <Spinner />
        }
        return (
            <div className='row'>
                <div className="col s12">
                    <Venues venues={this.state.venues} header={this.state.header} />
                </div>
            </div>
        )
    }
}
export default CityVenues;