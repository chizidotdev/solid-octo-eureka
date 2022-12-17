import React, { createContext, useContext, useEffect, useState } from "react";

export type Service = {
  id: number;
  name: string;
  description: string;
  updated: Date;
};

const ServiceContext = createContext<{ services: Service[] }>({
  services: [],
});

const API_URL = "https://backend.myrhenda.com/api/v1/all-services";

export const ServiceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) =>
        setServices((data.data as Service[]).sort((a, b) => a.id - b.id))
      );
  }, []);

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
