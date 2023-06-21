import {useCallback, useState} from "react";
import {Match} from "../../types";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

interface IAddMatchModalProps {
    onConfirm: (match: Match) => void,
    onClose: () => void
}

const AddMatchModal = ({onConfirm, onClose}: IAddMatchModalProps) => {
    const [teamNames, setTeamNames] = useState({home: '', away: ''})

    const onAdd = useCallback(() => onConfirm({
        homeTeam: {name: teamNames.home, score: 0},
        awayTeam: {name: teamNames.away, score: 0},
        id: `${Date.now()}`
    }), [teamNames, onConfirm])

    return <Modal title={'Add a new match'} onClose={onClose}>
        <Input
            onChange={event => setTeamNames(prevState => ({...prevState, home: event.target.value}))}
            id={'homeTeamName'}
            label={'Home team name'}
        />
        <Input
            onChange={event => setTeamNames(prevState => ({...prevState, away: event.target.value}))}
            id={'awayTeamName'}
            label={'Away team name'}
        />
        <Button onClick={onAdd}>
            Add
        </Button>
    </Modal>
}

export default AddMatchModal