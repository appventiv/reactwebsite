import React, { Component } from 'react'
import ServiceCard from '../service_cards/ServiceCard'



export default class Service extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <ServiceCard></ServiceCard>
                    </div>
                    <div class="col-sm">
                        <ServiceCard></ServiceCard>
                    </div>
                    <div class="col-sm">
                        <ServiceCard></ServiceCard>
                    </div>
                </div>
            </div>
        )
    }
}

