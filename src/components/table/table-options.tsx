import { Menu } from "@headlessui/react";
import Link from "next/link";
import { HiOutlineDotsVertical } from "react-icons/hi";

type Props = {
  id: number;
};

const TableOptions = ({ id }: Props) => {
  const handleDelete = () => {
    console.log("Deleting ", id);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <HiOutlineDotsVertical aria-label="Options" />
      </Menu.Button>

      <Menu.Items className="absolute right-0 bottom-0 z-10 flex w-32 flex-col rounded-md bg-gray_day shadow-lg focus:outline-none dark:bg-gray_night dark:text-gray_day">
        <Link href={`/services/edit/${id}`}>
          <Menu.Item as="div" className="border-b p-2 dark:border-black_night">
            Edit
          </Menu.Item>
        </Link>
        <Menu.Item
          as="div"
          className="cursor-pointer p-2"
          onClick={handleDelete}
        >
          Delete
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default TableOptions;
