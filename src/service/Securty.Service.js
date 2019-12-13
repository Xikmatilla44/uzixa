import axios from 'axios';
// import { SecurtyModule} from "./module/Securty.Module";

const SecurtyService = {

    async testToken(){
     let result = false;
        if ( localStorage.getItem('token')){

              result = true;
        }
        else {
        result = false;}
    // debugger
        return result;

    }

    };
export default SecurtyService;
