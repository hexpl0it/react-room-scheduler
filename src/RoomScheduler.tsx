import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StickyTable, Row, Cell } from "react-sticky-table";

const RoomScheduler = ({ title = "Hello" }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setRooms(["Room 1", "Room 2", "Room 3", "Room 4", "Room 5"]);
  }, []);

  return (
    <div>
      <div style={{ width: "100%", height: "400px" }}>
        <StickyTable stickyHeaderCount={1} leftStickyColumnCount={1}>
          <Row>
            <Cell>Camere</Cell>
            <Cell>Header 2</Cell>
          </Row>
          {rooms.map((room) => {
            return (
            <Row>
              <Cell>{room}</Cell>
              <Cell>Cell 2</Cell>
            </Row>)
          })}
        </StickyTable>
      </div>
    </div>
  );
};

RoomScheduler.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RoomScheduler;
