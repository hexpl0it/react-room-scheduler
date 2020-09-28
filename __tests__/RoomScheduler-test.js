
import React from 'react';
import renderer from "react-test-renderer";
import RoomScheduler from '../src/RoomScheduler'

test('Props is displayed', () => {
  const component = renderer.create(
    <RoomScheduler title="Hello" />
  );
  const instance = component.root;
  expect(
    instance.findByProps({ className: "title" }).children
  ).toEqual(
    ["Hello"]
  );
});
