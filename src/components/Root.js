import React, {Component} from 'react'
import HeaderBar from './HeaderBar';
import ConfigPanel from "./ConfigPanel";
import ResourcePanel from "./ResourcePanel";
import {Grid} from 'semantic-ui-react';

const data = {
    searchHeadCores: 12,
    indexerCores: 12,
    marginOfError: 20,
    correlationSearches: 20,
    concurrentUsers: 6,
    splunkVersion: '7.0',
    esVersion: '4.7.2',
    networkTrafficTotal: 0,
    authenticationTotal: 0,
    webTotal: 0,
    networkTrafficConcurrency: 3,
    authenticationConcurrency: 3,
    webConcurrency: 3

};

export default class Root extends Component {
    constructor(args) {
        super(args);
        this.state = {
            changeCount: 0
        }
    }

    handleOnChange = () => {
        this.setState({changeCount: this.state.changeCount + 1});
    };

    render() {
        return (
            <div>
                <HeaderBar/>
                <Grid>
                    <Grid.Column width={8}>
                        <ConfigPanel data={data}/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <ResourcePanel data={data} onChange={() => this.handleOnChange()}/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}