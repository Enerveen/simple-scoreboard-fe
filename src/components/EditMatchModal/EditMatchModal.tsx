import {Match} from "../../types";
import {useState} from "react";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface IEditMatchModalProps {
    match: Match | null,
    onClose: () => void,
    onEditComplete: (matchId: string, homeTeamScore: number, awayTeamScore: number) => void
}
const EditMatchModal = ({match, onClose, onEditComplete}:IEditMatchModalProps) => {
    const [scores, setScores] = useState({home: match?.homeTeam.score || 0, away: match?.awayTeam.score || 0})
    console.log(scores)

    return <Modal title={'Edit match score'} onClose={onClose}>
        {match ? <><Input
            onChange={event => setScores(prevState => ({...prevState, home: Number(event.target.value)}))}
            id={'homeTeamScore'}
            label={`${match.homeTeam.name} score`}
            type={'number'}
            defaultValue={match.homeTeam.score}
        />
        <Input
            onChange={event => setScores(prevState => ({...prevState, away: Number(event.target.value)}))}
            id={'awayTeamScore'}
            label={`${match.awayTeam.name} score`}
            type={'number'}
            defaultValue={match.awayTeam.score}
        />
        <Button onClick={() => onEditComplete(match.id || '', scores.home, scores.away)}>
            Confirm
        </Button></> : <>Something went wrong</>}
    </Modal>
}

export default EditMatchModal