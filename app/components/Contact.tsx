"use client";

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "@/types/types";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: PageInfo };

function Contact({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const mailtoLink = `mailto:krutuja311@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    window.open(mailtoLink);
};

  return (
    <div className="flex flex-col relative h-screen text-center sm:text-left sm:flex-row md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-12 md:top-12 uppercase tracking-[20px] text-gray-500 text-base sm:text-lg md:text-xl xl:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col justify-center items-center space-y-8 md:space-y-10 mt-20">
        <h4 className="max-w-[90vw] text-xl md:text-3xl xl:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="block sm:inline decoration-[#F7AB0A]/50 underline">
            {" Let`s Talk"}
          </span>
        </h4>

        <div className="space-y-5 md:space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-start md:space-x-5 sm:space-x-3 space-x-3 justify-center max-w-[90vw]">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl wrap-break-word text-center">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-0 w-full max-w-[90vw] mx-auto"
        >
          <div className="flex flex-col sm:flex-row space-x-0.5">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
