export const Button = ({ children }: any) => (
    <button className="flex justify-center w-[150px] h-[40px] bg-blue-500 rounded hover:opacity-75 transition-opacity duration-300 p-5">
        <span className="text-white">Teste: {children}</span>
    </button>
)
