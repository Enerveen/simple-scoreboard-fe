import {render, screen, fireEvent} from '@testing-library/react';
import Scoreboard from './Scoreboard';
import {initialMatches} from "../../constants";
import '@testing-library/jest-dom'




describe('Scoreboard', () => {

    beforeEach(() => {
        render(<Scoreboard initialMatches={initialMatches} />);
    })

    test('should render the scoreboard with initial matches in a correct order, both modals are hidden', () => {
        const matchElements = screen.getAllByTestId('scoreboard-item');
        const editModal = screen.queryByText('Edit match score')
        const addModal = screen.queryByText('Add a new match')

        expect(matchElements.length).toBe(initialMatches.length);
        expect(matchElements[0]).toHaveTextContent('Uruguay')
        expect(matchElements[1]).toHaveTextContent('Spain')
        expect(matchElements[2]).toHaveTextContent('Mexico')
        expect(matchElements[3]).toHaveTextContent('Argentina')
        expect(matchElements[4]).toHaveTextContent('Germany')

        expect(editModal).toBeNull()
        expect(addModal).toBeNull()
    });

    test('should add a match to the scoreboard, it should be positioned according to its score', () => {
        const addBtn = screen.getByText('Add Match');

        fireEvent.click(addBtn);

        const homeInput = screen.getByLabelText('Home team name');
        const awayInput = screen.getByLabelText('Away team name');
        const addButton = screen.getByText('Add');

        fireEvent.change(homeInput, { target: { value: 'Mock Team A' } });
        fireEvent.change(awayInput, { target: { value: 'Mock Team B' } });
        fireEvent.click(addButton);

        const updatedMatchElements = screen.getAllByTestId('scoreboard-item');
        expect(updatedMatchElements.length).toBe(initialMatches.length + 1);
        expect(updatedMatchElements.at(-1)).toHaveTextContent('Mock Team A')
    });

    test('should remove a match from the scoreboard', () => {
        const removeBtn = screen.getAllByText('X')[0];
        fireEvent.click(removeBtn);

        const updatedMatchElements = screen.getAllByTestId('scoreboard-item');
        const removedMatchTeamName = screen.queryByText('Uruguay')
        expect(removedMatchTeamName).toBeNull()
        expect(updatedMatchElements.length).toBe(initialMatches.length - 1);
    });

    test('should edit match score, match should be positioned according to its score', () => {
        const editBtn = screen.getAllByText('Edit')[2];
        fireEvent.click(editBtn);

        const confirmButton = screen.getByText('Confirm');
        const homeTeamScoreInput = screen.getByLabelText('Mexico score');
        const awayTeamScoreInput = screen.getByLabelText('Canada score');

        fireEvent.change(homeTeamScoreInput, { target: { value: '10' } });
        fireEvent.change(awayTeamScoreInput, { target: { value: '5' } });
        expect(homeTeamScoreInput).toHaveValue(10);
        expect(awayTeamScoreInput).toHaveValue(5);

        fireEvent.click(confirmButton);

        const updatedMatchElements = screen.getAllByTestId('scoreboard-item');
        expect(updatedMatchElements[0]).toHaveTextContent('Mexico')
        const editModal = screen.queryByText('Edit match score')
        expect(editModal).toBeNull()
        expect(updatedMatchElements.length).toBe(initialMatches.length);
    });

});