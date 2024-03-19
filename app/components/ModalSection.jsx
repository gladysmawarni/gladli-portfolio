import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { leagueSpartan } from "../font/font";
import Image from "next/image";
import Link from "next/link";

const ModalSection = ({
  title,
  header,
  objective,
  solution,
  workflow,
  closing,
  github
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      {!github ?
      <Button
        size="sm"
        variant="border"
        className="h-14 w-14 border-2 relative rounded-full border-white hover:border-pink-400 group/link"
        onPress={onOpen}
      >
        <EyeIcon className="h- w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-pink-400" />
        
      </Button>
      : 
      <Link
            href={github}
            className="h-14 w-14 border-2 relative rounded-full border-white hover:border-pink-400 group/link"
            rel="noopener noreferrer" target="_blank"
          >
            <CodeBracketIcon className="h- w-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-pink-400" />
      </Link> }

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        scrollBehavior="inside"
        backdrop="blur"
        placement="center"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="text-black bellabooFont text-center justify-center text-5xl p-6">
                {title}
              </ModalHeader>
              <ModalBody className={leagueSpartan.className}>
                {/* header */}
                <p className={"text-black text-xl font-bold"}>{header}</p>

                {/* objective */}
                <h2 className={"text-black text-2xl text-center underline"}>
                  Objective
                </h2>
                <p className={"text-black text-lg"}>{objective}</p>

                {/* solution */}
                <h2 className={"text-black text-2xl text-center underline"}>
                  Solution
                </h2>
                <p className={"text-black text-lg"}>{solution}</p>

                {/* workflow */}
                <h2 className={"text-black text-2xl text-center underline"}>
                  Workflow
                </h2>
                <p className={"text-black text-lg"}>
                  {workflow.map((s) => (
                    <div  key={s.id}>
                      <li>{s.desc}</li>

                      <Image
                        src={`/images/screenshots/${s.image}`}
                        alt="example image"
                        className="m-auto py-7"
                        width={s.width}
                        height={s.height}
                        quality={100}   
                      />
                    </div>
                  ))}
                  <br />

                  {closing}
                </p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal> 

    </div>
  );
};

export default ModalSection;
