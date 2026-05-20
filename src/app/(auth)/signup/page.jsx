"use client";

import { Button, Form, Input, Label, TextField } from "@heroui/react";

const SignUpPage = () => {
  return (
    <div>
      <Form className="flex flex-col gap-4">
        <TextField
          className="w-full"
          name="name"
          type="text"
          variant="secondary"
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField
          className="w-full"
          name="email"
          type="email"
          variant="secondary"
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
        </TextField>
        <TextField
          className="w-full"
          name="phone"
          type="tel"
          variant="secondary"
        >
          <Label>Phone</Label>
          <Input placeholder="Enter your phone number" />
        </TextField>
        <TextField className="w-full" name="company" variant="secondary">
          <Label>Company</Label>
          <Input placeholder="Enter your company name" />
        </TextField>
        <TextField className="w-full" name="message" variant="secondary">
          <Label>Message</Label>
          <Input placeholder="Enter your message" />
        </TextField>

        <Button slot="close" variant="secondary">
          Cancel
        </Button>
        <Button slot="close">Send Message</Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
