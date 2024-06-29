import Image from "next/image";

interface Professional {
  name: string;
  specialty: string;
  description: string;
  avatar: string;
}

const professionals: Professional[] = [
  {
    name: "Dr. João",
    specialty: "Psicólogo",
    description: "Especialista em terapia cognitivo-comportamental.",
    avatar: "/tree.png",
  },
  {
    name: "Dr. Maria",
    specialty: "Psiquiatra",
    description: "Especialista em transtornos de ansiedade e depressão.",
    avatar: "/signup.svg",
  },
  {
    name: "Dr. Pedro",
    specialty: "Psicólogo",
    description: "Especialista em terapia comportamental.",
    avatar: "/tree.png",
  },
  {
    name: "Dr. Ana",
    specialty: "Psiquiatra",
    description: "Especialista em transtornos de personalidade.",
    avatar: "/signup.svg",
  },
];

export default function Page() {
  return (
    <div className="relative flex min-h-screen place-items-center overflow-hidden">
      <div className="grid grid-flow-col size-full gap-5 place-items-center mx-10 my-20 gap-x-3">
        <div className="flex flex-col">
          <div className="p-10 self-center">
            <Image src="/login.svg" width={500} height={500} alt="tree" />
          </div>
          <div></div>
          <div className="w-fit grid grid-cols-2 gap-6">
            {professionals.map((professional) => {
              return (
                <div className="p-2 border border-1 border-black rounded-md flex flex-row">
                  <div className="flex w-1/3 justify-center">
                    <Image
                      src={professional.avatar}
                      width={150}
                      height={150}
                      alt="avatar"
                    />
                  </div>
                  <div className="w-2/3">
                    <div className="text-4xl">{professional.name}</div>
                    <div className="text-lg">{professional.specialty}</div>
                    <div className="flex flex-wrap">
                      {professional.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
