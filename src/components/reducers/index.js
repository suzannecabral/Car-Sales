import { CLICK_ADD, CLICK_DELETE } from "../actions"


const initialState = {
        testKey:false,
        additionalPrice: 0,
        car: {
            price: 26395,
            name: '2019 Ford Mustang',
            image:
                'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
            features: []
        },
        additionalFeatures: [
            { id: 1, name: 'V-6 engine', price: 1500 },
            { id: 2, name: 'Racing detail package', price: 1500 },
            { id: 3, name: 'Premium sound system', price: 500 },
            { id: 4, name: 'Rear spoiler', price: 250 }
        ]  
};

export const reducer = (state = initialState, action) => {
    // console.log("Action (from reducer): ", action);
    switch(action.type){
        case CLICK_ADD:
            console.log("---------");
            console.log("Reducer selected feature: ", action.payload.name);
            // console.log("Reducer action: ", action);
            const featureAdded = {
                ...state,
                car:{
                    ...state.car,
                    features:[
                        ...state.car.features,
                        action.payload
                    ]
                    },
                additionalFeatures:[
                    ...state.additionalFeatures.filter(item=>item.id !== action.payload.id)
                ],
                additionalPrice:state.additionalPrice + action.payload.price,
            }

            console.log(featureAdded);
            return featureAdded;
        case CLICK_DELETE:
            
            const featureDeleted ={
                ...state,
                car:{
                    ...state.car,
                    features:[
                        ...state.car.features.filter(item=>item.id !== action.payload.id)
                    ]
                },
                additionalFeatures:[
                    ...state.additionalFeatures,
                    action.payload
                ],
                additionalPrice:state.additionalPrice - action.payload.price,
            }
            return featureDeleted;
        default:
            console.log("---------");
            console.log("Reducer defaulted");
            console.log("Reducer action: ", action);
            return state;
    }
}
