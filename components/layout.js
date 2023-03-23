const Layout = ({ children }) => {
  return (
    <div className="container">
      <h1>Header</h1>
      {children}
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
