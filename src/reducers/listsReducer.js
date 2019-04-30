import { CONSTANTS} from "../actions";
let listID = 2;

const initialState =[
    {
        title: "EU",
        id: 0,
        cards: [
            {
                id: 0,
                text:"we craeted a static list and a static card"
            },
            {
                id: 1,
                text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            }
        ]
    },
    {
        title: "Asia",
        id: 1,
        cards: [
            {
                id: 0,
                text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
            },
            {
                id: 1,
                text:" totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
            },
            {
                id: 2,
                text:" Et harum quidem rerum facilis est et expedita distinctio."
            }
        ]
    }
]
const listReducer  = (state = initialState,action ) =>{
    switch (action.type ) {
        case CONSTANTS.ADD_LIST:
            const newList =  {
                title: action.payload,
                card: [],
                id: listID
            } 
            listID += 1
            return [...state,newList];

        default : 
            return state;
    }
}
export default listReducer;