"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "sonner";

const DeleteButton = ({ bookingId }) => {
  const router = useRouter();
  const handleDeleteBtn = async () => {
    const { data: tokenData } = await authClient.token();
    const token = tokenData?.token;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/booking/${bookingId}/cancel`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        credentials: "include",
      },
    );

    const data = await res.json();

    if (data) {
      router.refresh();
      toast("Booking Cancelled", {
        style: {
          color: "#00c950",
        },
      });
    }
  };

  return (
    <AlertDialog>
      <Button className="rounded-lg border border-red-200 bg-purple-50 text-red-500 hover:bg-red-50">
        <RiDeleteBin6Line /> Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel this booking?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                You&apos;ll lose your reserved time slot. The room will become
                available to others.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Keep Booking
              </Button>
              <Button slot="close" variant="danger" onClick={handleDeleteBtn}>
                Yes,Cancel
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteButton;
