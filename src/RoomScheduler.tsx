import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { StickyTable, Row, Cell } from "react-sticky-table";
import moment from "moment";
import $ from "jquery";
import Draggable from "react-draggable";

const RoomScheduler = ({ title = "Hello" }) => {
  const [rooms, setRooms] = useState([]);
  const [startDate, setStartDate] = useState(moment().add(-1, "M"));
  const [endDate, setEndDate] = useState(moment().add(1, "M"));
  const [daysArray, setDaysArray] = useState([]);
  const [cellSize, setCellSize] = useState({ h: 0, w: 0 });
  const scrollElement = useRef();
  const firstCell = useRef();
  const [reload, setReload] = useState(new Date());

  const arrayOfDays = (startDate, endDate) => {
    var datesArray = [];
    var currentDate = startDate;
    while (currentDate <= endDate) {
      datesArray.push(moment(currentDate));
      currentDate = currentDate.add(1, "d");
    }
    return datesArray;
  };

  useEffect(() => {
    setRooms(["Room 1", "Room 2", "Room 3", "Room 4", "Room 5"]);
    setDaysArray(arrayOfDays(startDate, endDate));
  }, []);

  useEffect(() => {
    //   // firstRow.current = $(".sticky-table-row:first()").attr("tag", "tag");
    firstCell.current = $(".sticky-table-cell:first()")[0];
    const he = $(firstCell.current).outerHeight(true);
    const wi = $(firstCell.current).outerWidth(true);

    setCellSize({ h: he, w: wi });
    //   // console.log($(firstRow.current).outerHeight())
    //   console.log($(firstCell.current).outerWidth());
    //   console.log($(firstCell.current).outerHeight());

    //   var div = document.createElement("div");
    //   div.style.backgroundColor = "red";
    //   div.style.position = "absolute";
    //   div.style.top = $(firstCell.current).outerHeight() + "px";
    //   div.style.left = $(firstCell.current).outerWidth() + "px";
    //   div.style.height = $(firstCell.current).outerHeight() + "px";
    //   div.style.width = "150px";
    //   div.className = "reservation";

    //   debugger;
    //   document.getElementsByClassName("sticky-table")[0].appendChild(div);
  }, [cellSize]);

  $(document).ready(() => {
    firstCell.current = $(".sticky-table-cell:first()")[0];
    const he = $(firstCell.current).outerHeight(true);
    const wi = $(firstCell.current).outerWidth(true);

    setCellSize({ h: he, w: wi });
    setReload(new Date());
  });

  return (
    <div>
      <div style={{ width: "100%", height: "400px" }}>
        <StickyTable
          wrapperRef={scrollElement}
          stickyHeaderCount={1}
          leftStickyColumnCount={1}
        >
          <Row>
            <Cell>Camere</Cell>
            {daysArray.map((d) => {
              return <Cell>{d.format("DD/MM")}</Cell>;
            })}
            <Draggable axis="x" grid={[cellSize.w, cellSize.h]}>
              <div
                style={{
                  backgroundColor: "red",
                  position: "absolute",
                  top: cellSize.h,
                  left: cellSize.w,
                  width: 150,
                  height: cellSize.h,
                }}
              ></div>
            </Draggable>
          </Row>
          {rooms.map((room) => {
            return (
              <Row>
                <Cell>{room}</Cell>
                {daysArray.map((d) => {
                  return <Cell></Cell>;
                })}
              </Row>
            );
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
