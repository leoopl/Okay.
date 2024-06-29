import Image from "next/image";
import tree from "../public/tree.png";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen place-items-center overflow-hidden">
        <div className="grid grid-flow-col size-full gap-5 place-items-center mx-10 gap-x-3">
          <div className="w-1/2">
            <p className="text-lg text-black">
              Bem-vindo ao Okay?, um lugar onde você pode encontrar o apoio e a
              orientação de que precisa para administrar seus problemas.
              Entendemos que lidar com essas condições pode ser desafiador, mas
              você não precisa passar por isso sozinho. Nosso site oferece uma
              variedade de recursos e ferramentas, incluindo ferramentas de
              autoavaliação, estratégias de enfrentamento e opções de ajuda
              profissional, para ajudá-lo a assumir o controle de sua saúde
              mental. Estamos aqui para apoiá-lo em sua jornada e esperamos que
              considere úteis as informações e os recursos em nosso site.
              Lembre-se de que não há problema em pedir ajuda e você merece se
              sentir melhor. Okay?
            </p>
          </div>
          <div className="w-1/2">
            <Image src={tree} width={800} height={800} alt="tree" />
          </div>
        </div>
      </div>
    </>
  );
}
