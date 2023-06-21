import classes from './Scoreboard.module.scss'
import {Match} from "../../types";
import Button from "../Button/Button";
import AddMatchModal from "../AddMatchModal/AddMatchModal";
import EditMatchModal from "../EditMatchModal/EditMatchModal";
import ScoreboardItem from "../ScoreboardItem/ScoreboardItem";
import {useCallback, useState} from "react";

interface IScoreboardProps {
    initialMatches: Match[]
}

const Scoreboard = ({initialMatches}: IScoreboardProps) => {
    const [matches, setMatches] = useState<Match[]>(initialMatches)
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
    const [editedMatch, setEditedMatch] = useState<Match | null>(null)

    const addMatch = useCallback((match: Match) => {
        setMatches(prevState => [match, ...prevState])
        setIsAddModalOpen(false)
    }, [])

    const removeMatch = useCallback((matchId: string) => {
        setMatches(prevState => prevState.filter(({id}) => matchId !== id))
    }, [])

    const editMatch = useCallback((matchId: string, homeTeamScore: number, awayTeamScore: number) => {
        setEditedMatch(null)
        // Performing such manipulations to avoid mutation of the state
        setMatches((prevState) => prevState.map(match => {
            if (matchId === match.id) {
                return {
                    id: matchId,
                    homeTeam: {
                        name: match.homeTeam.name,
                        score: homeTeamScore
                    },
                    awayTeam: {
                        name: match.awayTeam.name,
                        score: awayTeamScore
                    }
                }
            }
            return match
        }))
    }, [])

    return <div className={classes.container}>
        <div className={classes.board}>
            {
                [...matches].sort((matchA, matchB) =>
                    (matchB.homeTeam.score + matchB.awayTeam.score) - (matchA.homeTeam.score + matchA.awayTeam.score))
                    .map((match => <ScoreboardItem match={match}
                                                   onRemove={() => removeMatch(match.id)}
                                                   onEdit={() => setEditedMatch(match)}
                                                   key={match.id}/>))
            }
        </div>
        <Button className={classes.addMatchBtn} onClick={() => setIsAddModalOpen(true)}>Add Match</Button>
        {isAddModalOpen && <AddMatchModal
            onConfirm={addMatch}
            onClose={() => setIsAddModalOpen(false)}
        />}
        {!!editedMatch && <EditMatchModal
            match={editedMatch}
            onClose={() => setEditedMatch(null)}
            onEditComplete={editMatch}
        />}
    </div>
}
export default Scoreboard