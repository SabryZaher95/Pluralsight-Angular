import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html',
})
export class EventsListComponent{
    event ={
        id: 1,
        name: 'Angular Connect',
        date: '20/06/2025',
        time: '11:00 am',
        price: '489.99',
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '6 Lebanon st',
            city: 'Kafr Elsheikh',
            country: 'Egypt'
        }
    }
}