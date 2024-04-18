import profilePhoto from "../assets/profile_photo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-6 md:py-6 bg-neutral-900 text-white font-sans">
        <div className="flex items-center md:ml-14">
          <div className="self-center py-1 overflow-hidden rounded-full h-9 w-9">
            <img
              alt="profile-photo"
              className="transform scale-150 "
              src={profilePhoto}
            />
          </div>
          <div className="ml-4 font-light tracking-wider text-xl md:text-2xl self-center">
            <p>
            <a href="/" rel="noopener noreferrer"> 
            <span>Sagar Singh</span>
            </a>
            </p>
          </div>
        </div>
        <div className="flex space-x-4 md:space-x-8 md:mr-10 text-base md:text-lg">
          <div>About</div>
          <div>Resume</div>
        </div>
      </div>
    </nav>
  );
}
