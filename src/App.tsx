import Scoreboard from "./components/Scoreboard/Scoreboard";
import {initialMatches} from "./constants";
import classes from './App.module.scss'


const App = () => <div className={classes.container}>
    <Scoreboard initialMatches={initialMatches}/>
</div>

export default App