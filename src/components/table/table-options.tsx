import Modal from "@components/modal";
import { Button, Text } from "@components/ui";
import { Dialog, Menu } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

type Props = {
  id: number;
};

const TableOptions = ({ id }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deletedModalOpen, setDeletedModalOpen] = useState(false);

  const handleDelete = () => {
    console.log("Deleting ", id);
    setModalOpen(false);
    setDeletedModalOpen(true);
  };

  return (
    <>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <Dialog.Title
          as="h3"
          className="text-center text-lg font-medium leading-6 dark:text-white_day"
        >
          <Text intent="h3">Are you sure?</Text>
        </Dialog.Title>

        <div className="mt-10 flex justify-center gap-5">
          <Button size="small" intent="secondary" onClick={handleDelete}>
            Confirm
          </Button>

          <Button size="small" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
        </div>
      </Modal>

      <Modal isOpen={deletedModalOpen} setIsOpen={setDeletedModalOpen}>
        <Dialog.Title
          as="h3"
          className="text-center text-lg font-medium leading-6 dark:text-white_day"
        >
          <Text intent="h3">Deleted Service at id #{id}</Text>
        </Dialog.Title>

        <div className="mt-10 flex justify-center gap-5">
          <Button onClick={() => setDeletedModalOpen(false)}>Done</Button>
        </div>
      </Modal>

      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>
          <HiOutlineDotsVertical aria-label="Options" />
        </Menu.Button>

        <Menu.Items className="absolute right-0 bottom-0 z-10 flex w-32 flex-col rounded-md bg-gray_day shadow-lg focus:outline-none dark:bg-gray_night dark:text-gray_day">
          <Link href={`/services/edit/${id}`}>
            <Menu.Item
              as="div"
              className="border-b px-5 py-2 dark:border-black_night"
            >
              Edit
            </Menu.Item>
          </Link>

          <Menu.Item
            as="div"
            className="cursor-pointer py-2 px-5"
            onClick={() => setModalOpen(true)}
          >
            Delete
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default TableOptions;
