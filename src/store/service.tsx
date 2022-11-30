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
    description: "build website",
    updated: new Date(),
  },
  {
    id: 2,
    name: "marketing",
    description: "generate sales revenue",
    updated: new Date(),
  },
  {
    id: 3,
    name: "ux designer",
    description: "branding and design",
    updated: new Date(),
  },
];
