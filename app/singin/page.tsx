import Image from "next/image";
import Link from "next/link";


export default function Longin() {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image alt="experience" width={510} height={450} src="/login.svg" />
            <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 small-caps">
              Espero que esteja tendo um bom dia!
            </h2>
          </div>
  
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="E-mail"
                    className="block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Senha"
                    className="block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="flex items-center justify-end">
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 small-caps">
                      Esqueceu sua senha?
                    </a>
                  </div>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Entrar
                </button>
              </div>
            </form>
  
            <p className="mt-2 text-center text-sm text-gray-900 small-caps">
              Ainda não tem conta?{' '}
              <Link href="/singup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }