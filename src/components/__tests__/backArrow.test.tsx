import React from "react";
import renderer from "react-test-renderer";
import { useNavigation } from "@react-navigation/native";
import BackArrow from "../BackArrow";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

describe("<BackArrow />", () => {
  it("should match the snapshot", () => {
    const tree = renderer.create(<BackArrow />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call navigation.goBack when pressed", () => {
    const goBack = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ goBack });

    const tree = renderer.create(<BackArrow />).root;
    const button = tree.findByProps({ testID: "back-arrow-button" });
    button.props.onPress();

    expect(goBack).toHaveBeenCalled();
  });
});
