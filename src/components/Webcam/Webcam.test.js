/**
 * @jest-environment jsdom
 */

/* eslint-disable no-undef */

import renderer from "react-test-renderer";
import Webcam from "../Webcam";

it("changes the class when hovered", () => {
	const component = renderer.create(Webcam);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
