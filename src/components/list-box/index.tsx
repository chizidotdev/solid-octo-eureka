import { Listbox } from "@headlessui/react";
import React, { useState } from "react";
import { FiChevronDown, FiCheck } from "react-icons/fi";

type Props<T extends { name: string }> = {
  data: T[];
};

export default function ListBox<T extends { name: string }>({
  data,
}: Props<T>) {
  const [selected, setSelected] = useState(data[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-60">
        <Listbox.Button className="flex w-full items-center justify-between rounded-md border border-black_night py-2 px-4">
          <span>{selected.name}</span>
          <FiChevronDown aria-hidden />
        </Listbox.Button>

        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray_day py-1 text-sm shadow-lg ring-1 ring-black_night ring-opacity-5 focus:outline-none dark:bg-black_night">
          {data.map((item, idx) => (
            <Listbox.Option
              key={idx}
              value={item}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 dark:text-gray_day ${
                  active && "bg-white_night bg-opacity-10 dark:bg-opacity-50"
                }`
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {item.name}
                  </span>
                  {selected && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-inherit">
                      <FiCheck aria-hidden />
                    </span>
                  )}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
