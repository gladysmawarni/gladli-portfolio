"use client";
import React, { useState } from "react";
import { DMserif, leagueSpartan } from "../font/font";
import Link from "next/link";
import Image from "next/image";
import { Input, Textarea, Button, Tooltip } from "@nextui-org/react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log(resData);
      setEmailSubmitted(true);
    }
  };


  return (
    <section className="bg-[#e66d8de2] py-20 place-self-center grid md:grid-cols-2 gap-4" id= "contact">
      <div>
        <h1
          className={`${DMserif.className} text-[#ebd0b9] text-5xl md:text-7xl lg:text-8xl pb-10 pl-10 lg:pl-20`}
        >
          Let's Connect
        </h1>
        <p
          className={`${leagueSpartan.className} text-[#ebd0b9] max-w-md lg:max-w-lg pb-10 mx-10 lg:mx-20`}
        >
          Feel free to reach out with any opportunities or inquiries, my inbox
          is always open and ready for new adventures! <br />
          Let's connect and explore exciting possibilities together.
        </p>

        <div className="socials flex flex-row gap-5 ml-20 lg:ml-44">
          <Tooltip
            content="Github"
            placement="bottom"
            className="bg-[#e89bb0] px-3 rounded-full text-sm"
          >
            <Link
              href="https://github.com/gladysmawarni"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={`/images/icons/socials/github.png`}
                alt="social icon"
                width={40}
                height={40}
              />
            </Link>
          </Tooltip>
          <Tooltip
            content="LinkedIn"
            placement="bottom"
            className="bg-[#e89bb0] px-3 rounded-full text-sm"
          >
          <Link
            href="https://www.linkedin.com/in/gladys-mawarni"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={`/images/icons/socials/linkedin.png`}
              alt="social icon"
              width={40}
              height={40}
            />
          </Link>
          </Tooltip>
          <Tooltip
            content="UpWork"
            placement="bottom"
            className="bg-[#e89bb0] px-3 rounded-full text-sm"
          >
          <Link
            href="https://www.upwork.com/freelancers/~01bf84b994acf51062"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={`/images/icons/socials/upwork.png`}
              alt="social icon"
              width={40}
              height={40}
            />
          </Link>
          </Tooltip>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4 max-w-md mx-20 my-12" onSubmit={handleSubmit}>
          <Input isClearable isRequired label="Your Email" labelPlacement="inside" name="email" id="email"/>
          <Input isClearable label="Subject" labelPlacement="inside" name="subject" id="subject"/>
          <Textarea label="Ideas" maxRows={3} name="message" id="message"/>
          <Button type="submit" className="bg-[#ebd0b9] text-gray-600">
            Send
          </Button>
          {
            emailSubmitted && (
              <p className={`${DMserif.className} text-[#fafafa] pb-10 mx-15 lg:mx-20 text-xl font-bold`}>Email sent successfully!</p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
