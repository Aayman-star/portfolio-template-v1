import Layout from "./Layout";
const Footer = () => {
  return (
    <Layout>
      <div
        className={`w-full p-4 border-t-[1px]  md:max-w-7xl mx-auto 
      `}>
        <p className="text-center text-gray-500">Copyright © 2024, Aayman</p>
      </div>
    </Layout>
  );
};

export default Footer;
