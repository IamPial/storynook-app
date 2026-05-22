"use client";

import { useState } from "react";
import {
  Modal,
  Button,
  Label,
  TextField,
  TextArea,
  Select,
  ListBox,
  Surface,
  DateField,
  Calendar,
  DatePicker,
} from "@heroui/react";
import { RiExpandVerticalLine } from "react-icons/ri";
import { getLocalTimeZone, today } from "@internationalized/date";

const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

const BookNowModalPage = ({ room }) => {
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("11:00");

  const calculateTotal = () => {
    const start = parseInt(startTime.split(":")[0]);
    const end = parseInt(endTime.split(":")[0]);
    const hours = end - start;
    return hours > 0 ? hours * (room?.rate || 0) : 0;
  };

  const [bookingDate, setBookingDate] = useState(today(getLocalTimeZone()));

  return (
    <Modal>
      <Button
        color="secondary"
        className="w-full font-semibold shadow-md shadow-purple-200 bg-purple-600 hover:bg-purple-700 text-white mt-2 rounded-xl"
      >
        Book Now
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>
                Book <span className="text-purple-600">{room?.name}</span>
              </Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Pick a date and time slot. Bookings run on the hour.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <DatePicker
                    name="date"
                    value={bookingDate}
                    onChange={setBookingDate}
                  >
                    <Label>Date</Label>
                    <DateField.Group variant="secondary">
                      <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                      </DateField.Input>
                      <DateField.Suffix>
                        <DatePicker.Trigger>
                          <DatePicker.TriggerIndicator />
                        </DatePicker.Trigger>
                      </DateField.Suffix>
                    </DateField.Group>
                    <DatePicker.Popover>
                      <Calendar aria-label="Choose date">
                        <Calendar.Header>
                          <Calendar.YearPickerTrigger>
                            <Calendar.YearPickerTriggerHeading />
                            <Calendar.YearPickerTriggerIndicator />
                          </Calendar.YearPickerTrigger>
                          <Calendar.NavButton slot="previous" />
                          <Calendar.NavButton slot="next" />
                        </Calendar.Header>
                        <Calendar.Grid>
                          <Calendar.GridHeader>
                            {(day) => (
                              <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                            )}
                          </Calendar.GridHeader>
                          <Calendar.GridBody>
                            {(date) => <Calendar.Cell date={date} />}
                          </Calendar.GridBody>
                        </Calendar.Grid>
                      </Calendar>
                    </DatePicker.Popover>
                  </DatePicker>

                  <div className="flex gap-3">
                    <Select
                      variant="secondary"
                      className="w-full"
                      placeholder="Select one"
                    >
                      <Label>Start</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator className="size-3">
                          <RiExpandVerticalLine />
                        </Select.Indicator>
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          {timeSlots.map((time) => (
                            <ListBox.Item key={time} id={time}>
                              {time}
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    <Select
                      variant="secondary"
                      className="w-full"
                      placeholder="Select one"
                    >
                      <Label>End</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator className="size-3">
                          <RiExpandVerticalLine />
                        </Select.Indicator>
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          {timeSlots.map((time) => (
                            <ListBox.Item key={time} id={time}>
                              {time}
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  <TextField name="note" variant="secondary" className="w-full">
                    <Label>
                      Special note{" "}
                      <span className="text-muted">(optional)</span>
                    </Label>
                    <TextArea placeholder="Any setup needed?" rows={3} />
                  </TextField>

                  <div className="flex justify-between items-center bg-gray-200 rounded-xl px-4 py-3">
                    <span className="text-sm text-muted">Total cost</span>
                    <span className="text-lg font-bold text-purple-600">
                      ${calculateTotal()}
                    </span>
                  </div>
                </form>
              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button
                slot="close"
                className="bg-purple-600 text-white hover:bg-purple-700"
              >
                Confirm Booking
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookNowModalPage;
