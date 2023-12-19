import React from "react";
import { Component } from "react";
import '../Components/high.css'

export default class HigherOrderComponent extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
            ]
        }
    }
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    userType = () => {
        const userTyp = 'Designer';
        const data = this.state.userData;
        return data.filter(el => el.user_type === userTyp)
            .map(item => (
                <React.Fragment key={item.id}>
                    <li className="list-elements">
                        <span>Id: {item.id}</span>
                        <span>Name : {item.name}</span>
                        <span>User Type: {item.user_type}</span>
                    </li>
                </React.Fragment>
            ));
    }

    filterByLetterJ = () => {
        const data = this.state.userData;
        return data.filter(el => el.name.charAt(0).toUpperCase() === 'J')
            .map(item => (
                <React.Fragment key={item.id}>
                    <li className="list-elements">
                        <span>Id: {item.id}</span>
                        <span>Name : {item.name}</span>
                        <span>User Type: {item.user_type}</span>
                    </li>
                </React.Fragment>

            ));
    }

    filterByAge = () => {
        const data = this.state.userData;
        return data.filter(el => el.age > 28 && el.age <= 50)
            .map(item => (
                <React.Fragment key={item.id}>
                    <li className="list-elements">
                        <span>Id: {item.id}</span>
                        <span>Name : {item.name}</span>
                        <span>User Type: {item.user_type}</span>
                    </li>
                </React.Fragment>
            ));
    }

    filterByTotalExperience = () => {
        const data = this.state.userData;
        const designer = data.filter(el => el.user_type === 'Designer')
        const years = designer.reduce((acc, curr) => acc + curr.years, 0);
        return (
            <React.Fragment>
                <li className="list-elements">
                    <span>Total Experience of Designers: {years} years</span>
                </li>
            </React.Fragment>
        );
    }
    
    


    render() {
        return (
            <div className="container">
                <h1>DISPLAY ALL ITEMS</h1>
                <div className="display-box">
                    <ul>{this.renderItems()} </ul>
                </div>

                <h1>DISPLAY DATA BASED ON USERTYPE</h1>
                <div className="display-box">
                    <ul>{this.userType()} </ul>
                </div>

                <h1>DISPLAY DATA BASED ON FIRST LETTER J</h1>
                <div className="display-box">
                    <ul>{this.filterByLetterJ()} </ul>
                </div>

                <h1>DISPLAY DATA BASED ON AGE</h1>
                <div className="display-box">
                    <ul>{this.filterByAge()} </ul>
                </div>

                <h1>DISPLAY DATA BASED THE TOTAL EXPERIENCE OF THE DESIGNERS</h1>
                <div className="display-box">
                    <ul>{this.filterByTotalExperience()} </ul>
                </div>
            </div>
        )
    }
}



