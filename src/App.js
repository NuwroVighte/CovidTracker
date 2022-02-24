import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import covidLogo from './images/covid19trackerlogo.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        //console.log(fetchedData);
        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});

        //console.log(fetchedData);
        //console.log(country);
        //fetch data
        //set state
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={covidLogo} alt="COVID-19 Tracker"/>
                <Cards data={data} />
                <p>*Note: the World Health Organization no longer tracks COVID-19 recovery statistics.</p>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;

