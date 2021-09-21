import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders testing change link", () => {
	render(<App />);
	const linkElement = screen.getByText(/testing change/i);
	expect(linkElement).toBeInTheDocument();
});
