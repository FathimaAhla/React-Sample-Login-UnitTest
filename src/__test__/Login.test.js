import { render, screen } from "@testing-library/react"
import Login from "../Login"

test("Checking component loaded ", () => {
    // steps for testing heading element loaded
    render(<Login />);
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
});

