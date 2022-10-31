import Link from "next/link"


const PrimaryLink = ({children, href, type}) => {
    return (
        <Link href={href} className="relative ">
            <a className={`relative h-14  flex items-center font-bold text-xl group transition-colors hover:bg-black ${type === "primary" ? ' bg-dark-yellow ' : ' bg-lightest-gray '}`}>
                <span className="absolute w-full h-full">
                <svg className="w-3 absolute top-0.5 left-0.5 transition-colors group-hover:fill-white"  xmlns="http://www.w3.org/2000/svg" viewBox="64 64 384 384"><path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"></path></svg>
                <svg className="w-3 absolute top-0.5 right-0.5 transition-colors group-hover:fill-white"  xmlns="http://www.w3.org/2000/svg" viewBox="64 64 384 384"><path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"></path></svg>
                <svg className="w-3 absolute bottom-0.5 right-0.5 transition-colors group-hover:fill-white"  xmlns="http://www.w3.org/2000/svg" viewBox="64 64 384 384"><path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"></path></svg>
                <svg className="w-3 absolute bottom-0.5 left-0.5 transition-colors group-hover:fill-white"  xmlns="http://www.w3.org/2000/svg" viewBox="64 64 384 384"><path d="M448 224H288V64h-64v160H64v64h160v160h64V288h160z"></path></svg>
                </span>
                <span className="text-black px-16 transition-colors group-hover:text-white uppercase tracking-wider">
                    {children}
                </span>
            </a>
        </Link>
    )
}

export default PrimaryLink