export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const bands={
        id:Math.random(0,10000000),
        name:action.name
      }
      return { ...state, bands: [...state.bands, bands] }
    case "DELETE_BAND":

      return {bands:state.bands.filter(band=>band.id!==action.id)}
    default:
      return state;
  }
};
