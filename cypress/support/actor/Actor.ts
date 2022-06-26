import { CommonTask } from "../tasks/CommonTask";
import { LoginTask } from "../tasks/LoginTask";
import { ProductTask } from "../tasks/ProductTask";



class Actor extends CommonTask {
    readonly loginTask: LoginTask = new LoginTask();
    readonly productTask: ProductTask = new ProductTask();
    readonly commonTask: CommonTask = new CommonTask();

    constructor() {

        super();
    }
}
const actor = new Actor(); 
export { actor };