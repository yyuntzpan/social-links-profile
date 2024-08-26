import Image from "next/image";
import Link from "next/link";

const profileData = {
  name: "Jessica Randall",
  location: "London, United Kingdom",
  bio: '"Front-end developer and avid reader."',
  socialsLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
    },
    {
      name: "Frontend Mentor",
      url: "#",
    },
    {
      name: "LinkedIn",
      url: "#",
    },
    {
      name: "Twitter",
      url: "#",
    },
    {
      name: "Instagram",
      url: "#",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center mx-5">
      <main className="flex flex-col items-center justify-center grow m-5 w-full max-w-sm">
        <div className="text-center flex flex-col items-center  bg-grey-800  rounded-xl w-full  p-6 sm:p-10 gap-6">
          <Image
            className="rounded-full"
            src="/avatar-jessica.jpeg"
            alt="avatar"
            width={85}
            height={85}
          />

          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-2">{profileData.name}</h1>
            <h2 className="text-sm font-semibold text-green mb-5">
              {profileData.location}
            </h2>
            <p className="text-sm">{profileData.bio}</p>
          </div>

          <ul className="flex flex-col w-full gap-4">
            {profileData.socialsLinks.map((social) => (
              <li key={social.name}>
                <Link
                  className="text-sm font-semibold bg-grey-700 rounded-lg py-3 w-full hover:bg-green hover:text-grey-900 focus:bg-green focus:text-grey-900"
                  href={social.url}
                >
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="text-center h-5 sm:h-7">
        <p className="text-gray-400 text-xs sm:text-sm">
          Challenge by{" "}
          <a
            className=" hover:text-green underline focus:text-green"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a className="hover:text-green focus:text-green underline" href="#">
            YunTZ Pan
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
