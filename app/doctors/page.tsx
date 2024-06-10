import Image from "next/image";
import tree from "../../public/tree.png";

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
    avatar: "/tree.png",
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
    avatar: "/tree.png",
  },
];

export default function Page() {
  return (
    <div className="relative flex min-h-screen place-items-center overflow-hidden">
      <div className="grid grid-flow-col size-full gap-5 place-items-center mx-10 gap-x-3">
        <div className="flex flex-col">
          <div className="p-10 self-center">
            <Image src={tree} width={80} height={80} alt="tree" />
          </div>
          <div></div>
          <div className="w-fit grid grid-cols-2 gap-2">
            {professionals.map((professional) => {
              return (
                <div className="p-2 border border-1 border-black rounded-md flex flex-row">
                  <div>
                    <Image
                      src={professional.avatar}
                      width={80}
                      height={80}
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <div>{professional.name}</div>
                    <div>{professional.specialty}</div>
                    <div>{professional.description}</div>
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
