import { ModelsStore } from 'src/app/models/store.models';
import { ModelsHome } from 'src/app/models/home.models';
import { ModelsNotification } from 'src/app/models/notifications.models';

export namespace Models {

    export import Home = ModelsHome;
    export import Store = ModelsStore;
    export import Notification = ModelsNotification;
}
