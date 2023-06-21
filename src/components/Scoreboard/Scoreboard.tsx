import {Match} from "../../types";

interface IScoreboardProps {
    initialMatches: Match[]
}
const Scoreboard = ({initialMatches}: IScoreboardProps) => {
    console.log(initialMatches)
    return <div></div>
}

export default Scoreboard