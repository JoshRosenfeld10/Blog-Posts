import BurstModeIcon from "@mui/icons-material/BurstMode";

function Header() {
  return (
    <div className="flex justify-center items-center w-screen text-center text-4xl font-bold p-5 shadow-md text-green_primary cursor-default">
      <div className="flex items-center gap-3 bg-gradient-to-tr from-green_primary to-green_secondary p-3 rounded-lg w-fit text-light shadow-md">
        Posts
        <BurstModeIcon fontSize="large" className=" scale-125" />
      </div>
    </div>
  );
}

export default Header;
