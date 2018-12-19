import React, { Component } from 'react';
import axios from 'axios';
import constants from '../constants/general';
import './Home.css';


class History extends Component {
    constructor (props){
        super(props)
        this.state = {
            historyItems: [],
            item: undefined,
        }
        axios.post(constants.host + '/login',  { username: localStorage.getItem('username'), password: localStorage.getItem('password') })
        .then (res => {
            var history_data = res.data.history
            console.log(history_data)
            this.setState({ historyItems: history_data })
        })
        .catch(err => {
            console.log(err)
            alert("Please log in")
        })
    }

    imageClick = item => {
        this.setState({ item })
    }

    render(){

        return(
            <div>
                <p className='homeText1'>History</p>
                { this.state.historyItems.map(item => {
                    return <img onClick={e => this.imageClick(item)}  src = {constants.host + '/' + item.image.url} key={item.id} width= "450" height="250"/>
                })}
                <br/>
                <div>
                    { this.state.item ? this.state.item.predictions.map(e => {
                        return <center><div key={e.score}> 
                        <h1>{e.description}</h1>
                        <p style={{fontWeight: "bold"}}>Match Percentage: {(e.score *100).toFixed(2) + '%'}</p>
                        <p className='summary'><p style={{fontWeight: "bold"}}>Summary:</p> {e.summary}</p>
                        <p className='linkbutton'><a href = {e.wikipediaUrl}>Wikipedia Link</a></p> </div>
                        </center>
                    }) : 'NO ITEM IMAGE SELECTED' }
                </div>

            </div>

        );
    }

}

export default History;