export const CLICK_ADD='CLICK_ADD';

export const clickAdd=(feature)=>{
    console.log("item added from Actions: ", feature);
    return{
        type:CLICK_ADD,
        payload:feature
    }
}