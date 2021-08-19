const Container = ({ children }) => {
  return (
    <div className="bg-gray-800 w-full max-w-screen-xl min-h-screen mx-auto py-10 text-center text-gray-300">
      {children}
    </div>
  );
};

export default Container;
