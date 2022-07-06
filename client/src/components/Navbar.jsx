import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import logo from '../../images/logo.png';
const Navbar = () =>{
    return(
    <nav className='w-full flex md:justify-center between-center items-center p-4'>
     <div className='md:flex-[0.5] flex-initial justify-center items-center'>
      <img src={logo} alt='Logo' className='w-32 cursor-pointer' />
      <ul className='text-white md:flex hiddent list-none flex-row justify-between items-center flex-initial'>

      </ul>
     </div>
    </nav>
    );
}
export default Navbar;