import {Component} from 'angular2/core'; 
import {FriendService} from './crud.friendDataService'

@Component({
    selector: 'crud',
    template:`<h2>Here go my friend list</h2>
                <ul>
                    <li *ngFor="#friendList of friendList">
                        {{friendList}}
                    </li>
                </ul>
            `,
    providers:[FriendService]
})
 
export class CrudComponent {
    title = "Anuj";
    friendList;
    constructor(friendService:FriendService){
        this.friendList = friendService.getFriends();
    }   
}
