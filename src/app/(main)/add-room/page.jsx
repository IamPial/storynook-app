"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Checkbox,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  toast,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";

const AddRoomPage = () => {
  const router = useRouter();
  const { data: userData } = authClient.useSession();
  console.log(userData);
  const [status, setStatus] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  // checklist array
  const checkedList = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  // for amenities checklist
  const handleChange = (check, isSelected) => {
    setStatus((previousValue) =>
      isSelected
        ? [...previousValue, check]
        : previousValue.filter((myCheck) => myCheck !== check),
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const addRoomData = Object.fromEntries(formData.entries());

    //inserting amenities key to this object
    addRoomData.amenities = status;
    addRoomData.userId = userData?.user?.id;

    const res = await fetch("http://localhost:5000/room", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addRoomData),
    });
    const data = await res.json();

    if (data) {
      toast.success("Room added successfully!");
      router.push("/my-listings");
      router.refresh();
    }
  };
  return (
    <div className="container mx-auto py-10 px-2 md:px-0">
      <Form
        onSubmit={handleSubmit}
        className="rounded-lg bg-background/70 shadow-lg flex border border-purple-100 py-8 px-5  max-w-2xl mx-auto flex-col gap-4"
      >
        <TextField name="name" type="name">
          <Label className="font-semibold text-dark">Room Name</Label>
          <Input
            className="rounded-lg  focus:right-2 focus:ring-purple-400  border border-purple-200 w-full shadow-none  mt-0.5"
            placeholder="Enter your name"
            required
          />
          <FieldError />
        </TextField>
        <TextField name="description">
          <Label className="font-semibold text-dark">Description</Label>
          <TextArea
            required
            aria-label="Quick project update"
            className="h-32 w-full shadow-none focus:right-2 focus:ring-purple-400   border border-purple-200"
            placeholder="Write about creating rooms..."
          />

          <FieldError />
        </TextField>
        <TextField name="image" type="url">
          <Label className="font-semibold text-dark">Image URL</Label>
          <Input
            className="rounded-lg focus:right-2 focus:ring-purple-400   border border-purple-200 w-full shadow-none  mt-0.5"
            placeholder="https://...."
            required
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <FieldError />
        </TextField>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="preview"
            width={400}
            height={400}
            className="w-full h-auto object-cover rounded-lg border border-purple-200"
          />
        )}

        <div className="flex flex-col lg:flex-row gap-5 justify-between">
          <TextField name="floor" type="text">
            <Label className="font-semibold text-dark">Floor</Label>
            <Input
              className="rounded-lg focus:right-2 focus:ring-purple-400   border border-purple-200 w-full shadow-none  mt-0.5"
              placeholder="3rd Floor"
              required
            />
            <FieldError />
          </TextField>
          <TextField name="capacity" type="number">
            <Label className="font-semibold text-dark">Capacity</Label>
            <Input
              className="rounded-lg focus:right-2 focus:ring-purple-400   border border-purple-200 w-full shadow-none  mt-0.5"
              placeholder=" 4"
              required
            />
            <FieldError />
          </TextField>
          <TextField name="rate" type="number">
            <Label className="font-semibold text-dark">Hourly Rate ($)</Label>
            <Input
              className="rounded-lg focus:right-2 focus:ring-purple-400   border border-purple-200 w-full shadow-none  mt-0.5"
              placeholder="$5"
              required
            />
            <FieldError />
          </TextField>
        </div>

        <div>
          <Label className="font-semibold text-dark ">Amenities</Label>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 my-2">
            {checkedList.map((check) => {
              return (
                <Checkbox
                  key={check}
                  className="border border-purple-300 rounded-lg p-2 hover:bg-purple-100 "
                  onChange={(isSelected) => handleChange(check, isSelected)}
                >
                  <Checkbox.Control
                    className="border border-purple-200"
                    style={{
                      "--accent": "#7c3aed",
                      "--accent-hover": "#6d28d9",
                    }}
                  >
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <Checkbox.Content>
                    <Label className="text-dark font-semibold">{check}</Label>
                  </Checkbox.Content>
                </Checkbox>
              );
            })}
          </div>
        </div>

        <Button
          type="submit"
          className="cursor-pointer w-full rounded-lg  bg-[#9d4edd] hover:bg-[#8d46c7]"
        >
          Create Room
        </Button>
      </Form>
    </div>
  );
};

export default AddRoomPage;
