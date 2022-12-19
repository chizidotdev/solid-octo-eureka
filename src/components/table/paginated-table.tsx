// import "./paginate.scss";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import type { TableProps } from "./table";
import Table from "./table";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type Props<T = object> = TableProps<T> & {
  itemsPerPage: number;
};

const PaginatedTable = <T extends object>({
  itemsPerPage,
  data,
  columns,
}: Props<T>) => {
  const [currentItems, setCurrentItems] = useState<T[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const newItems = data.slice(itemOffset, endOffset);
    setCurrentItems(newItems);
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = (selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Table data={currentItems} columns={columns} />

      <div className="mt-5 flex flex-col justify-end gap-10 md:flex-row md:items-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <div className="flex items-center rounded p-1">
              <MdChevronRight />
            </div>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel={
            <div className="flex items-center rounded p-1">
              <MdChevronLeft />
            </div>
          }
          containerClassName="flex items-center gap-5 mr-2"
          pageClassName="cursor-pointer opacity-80"
          activeClassName="opacity-100"
        />
      </div>
    </>
  );
};

export default PaginatedTable;
