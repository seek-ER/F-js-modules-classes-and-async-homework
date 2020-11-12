import {ADDRESS, PORT, PATH, REGION} from './constant';
import getURL from './utils';

function url(){
    return getURL(ADDRESS,PORT,PATH);
} 

url = url();

export {url  ,REGION as region}; 
