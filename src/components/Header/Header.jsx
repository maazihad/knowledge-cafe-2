import profile from "../../assets/images/profile.png";

const Header = () => {
   return (
      <div className="flex justify-between items-center px-2 py-4 m-2 border-b-2">
         <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
         <img src={profile} alt="Profile Image" />
      </div>
   );
};

export default Header;