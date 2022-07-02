import { CommonTask } from "../tasks/CommonTask";
import { LoginTask } from "../tasks/LoginTask";
import { ProductTask } from "../tasks/ProductTask";
import { User } from "../../utils/User"
 




class Actor extends CommonTask {
    readonly loginTask: LoginTask = new LoginTask();
    readonly productTask: ProductTask = new ProductTask();
    readonly commonTask: CommonTask = new CommonTask();
    readonly user: User = new User();

    constructor() {
        super();
    }
}

const actor = new Actor(); 
export { actor };