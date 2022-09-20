/**
 * require render, screen
 * require readFakeData
 * require BandComponent
 * test async --> displays correct band information
 * render BandComponent
 *
 */

import { render, screen } from "@testing-library/react";

import BandComponent from "@/pages/bands/[bandId]";

import { readFakeData } from "../__mocks__/fakeData";

test("that BandComponent displays correct band information", async () => {
	const { fakeBands } = await readFakeData();
	render(<BandComponent band={fakeBands[0]} error={null} />);

	const heading = screen.getByRole("heading", {
		name: /the wandering bunnies/i
	});
	expect(heading).toBeInTheDocument();
});

test("band component displays error", async () => {
	render(<BandComponent band={null} error="EVERYTHING IS FINE" />);
	const error = screen.getByRole("heading", {
		name: /everything is fine/i
	});
	expect(error).toBeInTheDocument();
});
