"use client";

import { useState } from "react";
import {
  Modal,
  Button,
  Label,
  TextField,
  Input,
  TextArea,
  Select,
  ListBox,
  Surface,
} from "@heroui/react";

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
                  {/* Date */}
                  <TextField
                    name="date"
                    type="date"
                    variant="secondary"
                    className="w-full"
                  >
                    <Label>Date</Label>
                    <Input
                      min={new Date().toISOString().split("T")[0]}
                      defaultValue={new Date().toISOString().split("T")[0]}
                    />
                  </TextField>

                  {/* Start & End Time */}
                  <div className="flex gap-3">
                    <Select
                      placeholder={startTime}
                      variant="secondary"
                      className="flex-1"
                    >
                      <Label>Start</Label>
                      <Select.Trigger />
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

                    <Select variant="secondary" className="flex-1">
                      <Label>End</Label>
                      <Select.Trigger />
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

                  {/* Special Note */}
                  <TextField name="note" variant="secondary" className="w-full">
                    <Label>
                      Special note{" "}
                      <span className="text-muted">(optional)</span>
                    </Label>
                    <TextArea placeholder="Any setup needed?" rows={3} />
                  </TextField>

                  {/* Total Cost */}
                  <div className="flex justify-between items-center bg-purple-50 rounded-xl px-4 py-3">
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
