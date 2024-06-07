import React, { ReactNode, FC } from "react";
type Props = {
  children: ReactNode;
};
const Layout: FC<Props> = ({ children }) => {
  return <div className="w-full md:max-w-[90rem] md:mx-auto">{children}</div>;
};

export default Layout;
//
