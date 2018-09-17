import { LOAD_DATA, LOAD_MORE_DATA } from '../constants';

let initialState = {
  data: [],
  splicedDataArray: null
};

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);
  let copyData;
  let copyArray;
  let splicedArray;

  switch (action.type) {
    case LOAD_DATA: 
      // Make copy of incoming data
      copyData = Object.assign({}, action.data);
      // Extract the array from CopyData All 500 comments
      copyArray = copyData.data;
      // Take the first 15 comments
      splicedArray = copyArray.splice(0, 15);
      // push it in the empty array exist inside the state
      splicedArray.forEach(element => {
        updated.data.push(element);
      });
      // Take rest of the spliced records and set to updated.spliceDataArray
      updated.splicedDataArray = copyData.data;
      console.log(updated);
      
      return updated;
    case LOAD_MORE_DATA:
      // Grab new Data 
      let newData = updated.splicedDataArray.splice(0,15);
      // 
      updated.data = [...state.data, ...newData];
      
      return updated;
    default: 
      return updated;
  }
};