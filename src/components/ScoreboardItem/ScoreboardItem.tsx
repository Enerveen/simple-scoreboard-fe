import classes from './ScoreboardItem.module.scss'
import {Match} from "../../types";
import Button from "../Button/Button";

interface IScoreboardItemProps {
    match: Match,
    onRemove: () => void,
    onEdit: () => void
}
const ScoreboardItem = ({match, onRemove, onEdit}: IScoreboardItemProps) => {
    const {homeTeam, awayTeam} = match
    return <div className={classes.container} data-testid={'scoreboard-item'}>
        <div className={classes.teamBox}>
            <span>{homeTeam.name}</span>
            <span>{homeTeam.score}</span>
        </div>
        <span>-</span>
        <div className={classes.teamBox}>
            <span>{awayTeam.score}</span>
            <span>{awayTeam.name}</span>
        </div>
        <div className={classes.actionsBox}>
            <Button onClick={onEdit}>
                Edit
            </Button>
            <Button onClick={onRemove}>
                X
            </Button>
        </div>

    </div>
}

export default ScoreboardItem