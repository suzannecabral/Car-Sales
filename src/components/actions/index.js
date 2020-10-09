export const CLICK_ADD='CLICK_ADD';

export const clickAdd=(feature)=>{
    console.log("Actions added feature: ", feature);
    return{
        type:CLICK_ADD,
        payload:feature
    }
}