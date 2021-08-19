const Spinner = () => {
  return (
    <div className="flex flex-col items-center min-h-screen mt-10">
      <p>Loading....</p>
      <img src="./Rotating-ring.gif" alt="loading" className="h-20" />
    </div>
  );
};

export default Spinner;
