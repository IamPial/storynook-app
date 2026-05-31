import { BounceLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <BounceLoader color="#9AE600" />
    </div>
  );
}
