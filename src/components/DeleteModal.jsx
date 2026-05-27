"use client";

import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DeleteModalPage = ({ data, token }) => {
  const { _id } = data;
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/room/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();

    if (result) {
      toast("Room Deleted Successfully!", {
        style: {
          color: "#00c950",
        },
      });
      router.push("/rooms");
      router.refresh();
      return result;
    }
  };

  return (
    <AlertDialog>
      <Button className="px-8 bg-white border border-red-500 rounded-lg text-red-500 hover:bg-red-500 transition-all duration-300 hover:text-white">
        <RiDeleteBin6Line /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete room permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>Room</strong> and all of
                its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete Room
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};
export default DeleteModalPage;
