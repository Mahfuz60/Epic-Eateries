import { render, fireEvent } from '@testing-library/react';
import About from './About';


it("checkButtonRender", () => {
    const { queryAllByTitle } = render(<About />)
    const btn = queryAllByTitle("button")
    expect(btn).toBeTruthy();
});