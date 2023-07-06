import Image from "next/image"
import Link from "next/link";
import Wrapper from "../Shared/Wrapper";
const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white">
    <Wrapper>
    <div className="flex justify-between mx-auto max-w-screen-xl  py-4 sticky top-0 items-center">
   <div><Image src="/images/panaverselogo.png" alt="Panaverse Dao Logo" height={120} width={120}/></div> 
        <ul className="flex space-x-8 font-medium text-2xl">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/courses">Courses</Link></li>
        </ul></div></Wrapper></header>
  )
}

export default Header;