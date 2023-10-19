import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex items-center bg-gray-900 flex-col space-y-4  font-writer">
        <div className="flex flex-col space-y-4 bg-gray-800 px-5 py-4 rounded-md   mt-10">
          <Image
            src="/profile.jpg"
            alt="not found"
            width={300}
            height={300}
            className="rounded-lg shadow-slate-500"
          />
          <h1 className="text-center text-cyan-50 font-writer text-2xl font-semibold">
            Vishal Vasoya
          </h1>
        </div>

        <div className="text-cyan-50 font-writerItalic leading-9 ml-4 lg:ml-0 w-2/6 ">
          <h1>Hey! I am Data Scientist</h1>
          <h1>
            passionate about{" "}
            <span className="font-writerItalic font-semibold">
              Deep Learning
            </span>{" "}
            and{" "}
            <span className="font-writerItalic font-semibold">
              Neural Network!
            </span>
          </h1>
        </div>

        <div className="border border-gray-50 py-2 px-5 flex items-center rounded-md lg:w-2/6 space-x-6 lg:space-x-0 justify-between">
          <ImLocation className="text-red-200" />
          <div className="text-cyan-50 font-writerItalic">
            <h1>Location</h1>
            <h1>Surat, India </h1>
          </div>
        </div>

        <div className="flex flex-col lg:w-2/6 space-y-3 items-center lg:items-start">
          <h1 className="font-writer font-semibold text-cyan-50 text-xl text-left">
            Work
          </h1>
          <div className="flex justify-between flex-col space-y-4 ml-2 leading-8 lg:ml-0 ">
            <h2 className="font-writer  text-cyan-50 text-center lg:text-left">
              Data scientist with a passion for problem-solving and a strong
              track record of leadership. Highly capable of leading teams and
              collaborating to find innovative.
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:w-2/6 space-y-3 items-center lg:items-start">
          <h1 className="font-writer font-semibold text-cyan-50 text-xl text-left">
            Experience
          </h1>
          <div className="flex justify-between space-x-4">
            <Image
              src="/experience.jpg"
              alt="Not found"
              width={50}
              height={50}
            />
            <div className="font-writer  text-cyan-50">
              <h1>Associate Data Scientist</h1>
              <h3>Jan 2023-Aug 2023</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-2/6 space-y-5 items-center lg:items-start">
          <h1 className="font-writer font-semibold text-cyan-50 text-xl text-left">
            Contact
          </h1>
          <div className="flex justify-between flex-col space-y-4 ml-2 leading-8 lg:ml-0 ">
            <h2 className="  text-cyan-50 text-left">
              I&apos;m easy to reach and quick to respond on most platforms.
            </h2>
            <div className="flex space-x-4  lg:space-x-10">
              <Link
                className="flex space-x-3 bg-gray-800 justify-center item-center lg:px-4 lg:py-2 px-2 py-1 rounded-md"
                href="https://www.linkedin.com/in/vishalvasoya/"
              >
                <BsLinkedin className="text-[#0072b1] lg:text-2xl text-center mt-1" />
                <h1 className="text-cyan-50 underline">@vishalvasoya</h1>
              </Link>
              <Link
                className="flex space-x-3 bg-gray-800 justify-center item-center lg:px-4 lg:py-2 rounded-md px-2 py-1"
                href="https://github.com/VishalVasoya1"
              >
                <AiFillGithub className="text-[#4078c0] lg:text-2xl text-center mt-1" />
                <h1 className="text-cyan-50 underline">@VishalVasoya1</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
