import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import RedTea from '../components/screens/RedTea.js'
// import BlackTea from '../screens/BlackTea.js'
// import GreenTea from '../screens/GreenTea.js'
// import WhiteTea from '../screens/WhiteTea.js'
// import TeasGrid from '../screens/TeasGrid.js'
import MainView from '../components/screens/Main.js'
import TeasMenu from '../components/screens/TeasMenu.js'




const TeaNavigator = createStackNavigator({
    ChoiceScreen: MainView,
    Rodzaje: TeasMenu,
    Czerwona: RedTea,
    // Green: GreenTea,
    // White: WhiteTea,
    // Black: BlackTea

})
export default createAppContainer(TeaNavigator)