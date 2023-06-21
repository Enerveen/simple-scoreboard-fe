import {render} from "@testing-library/react";
import "@testing-library/jest-dom"
import App from "./App";


describe('App', () => {

    it('should render app', () => {
        const {getByText} = render(<App/>)
        expect(getByText('Simple scoreboard')).toBeInTheDocument();
    })
})