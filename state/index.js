import { createGlobalState } from 'react-hooks-global-state';


const initialState = {
  siteSettings: {
  },
  colors: {
    menuBackgroundColor: "red",
    menuBarColor: "#766D64",
    menuTextColor: "black",
    homePageTextColor: "black",
    contactTextColor: "black",
    menuBottomBorder: "3px solid black",
    homePageTextColor: "#997D6A",
    videosPageBackground: "white"
  },
}
const { setGlobalState, useGlobalState } = createGlobalState(initialState);

export { useGlobalState, setGlobalState };