import React, { createContext, useContext, useState } from "react";

export type Service = {
  id: number;
  name: string;
  description: string;
  updated: Date;
};

const ServiceContext = createContext<{ services: Service[] }>({
  services: [],
});

export const ServiceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [services] = useState(dummyServices);

  return (
    <ServiceContext.Provider value={{ services }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);

/**
 * temporary services array
 */
const dummyServices = [
  {
    id: 1,
    name: "web development",
    description:
      "Build website. It is a long established fact that a reader will be distracted",
    updated: new Date(),
  },
  {
    id: 2,
    name: "marketing",
    description:
      "Generate sales revenue. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    updated: new Date(),
  },
  {
    id: 3,
    name: "ux designer",
    description:
      "Branding and design. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    updated: new Date(),
  },
];
