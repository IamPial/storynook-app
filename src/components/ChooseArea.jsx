import { Chip, CircleDashedIcon } from "@heroui/react";
import { FaUserFriends } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const ChoosePage = () => {
  return (
    <div className="bg-purple-100  ">
      <div className="container mx-auto py-20 px-2 md:px-0">
        <div className="text-center">
          <Chip className=" soft bg-purple-200 border border-purple-500">
            <CircleDashedIcon />
            <Chip.Label> Why choose StoryNook</Chip.Label>
          </Chip>
        </div>
        <div className="mb-10 text-center">
          <h2 className="capitalize text-4xl lg:text-5xl text-dark font-bold mt-5 mb-2  ">
            Best way to manage your reading life
          </h2>
          <p className="mb-2 text-lg text-gray-600 ">
            Built around the way real students study — quiet, focused, and on
            your schedule.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10">
          <div className="border border-purple-400 rounded-lg shadow-md bg-purple-200 p-4 text-center space-y-2">
            <IoSearchSharp className="w-12 h-12 mx-auto text-purple-700" />
            <h2 className="text-2xl font-semibold text-dark">Book Discovery</h2>
            <p className="text-dark text-[16px]">
              Discoverd new books to read based on your interests,reading
              history,and the recommendations of other users.
            </p>
          </div>
          <div className="border border-purple-400 rounded-lg shadow-md bg-purple-200 p-4 text-center space-y-2">
            <FaUserFriends className="w-12 h-12 mx-auto text-purple-700" />
            <h2 className="text-2xl font-semibold text-dark">
              Friends and Community
            </h2>
            <p className="text-dark text-[16px]">
              You can connect with friends, family members, and other people who
              share your lover of reading.
            </p>
          </div>
          <div className="border border-purple-400 rounded-lg shadow-md bg-purple-200 p-4 text-center space-y-2">
            <FaStar className="w-12 h-12 mx-auto text-purple-700" />
            <h2 className="text-2xl font-semibold text-dark">Book Reviews</h2>
            <p className="text-dark text-[16px]">
              You can write reviews of books that you&apos;ve read and share
              your thoughts with other StoryNook users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosePage;
