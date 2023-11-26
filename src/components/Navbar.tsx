import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
    const navLinks = [
        {
            id: "about",
            title: "About Us",
        },
        {
            id: "shop",
            title: "Shop",
        },
        {
            id: "categories",
            title: "Categories",
        }
    ]
    const iconSize = {
        fontSize: 30,
    }
  return (
    <>
    <nav>
        <div className='w-full flex justify-between items-center'>
            <ul className='flex space-x-24 text-xl font-normal'>
                {navLinks.map((link) => (<li key={link.id}><a href="">{link.title}</a></li>))}
            </ul>
            <span className='text-4xl font-medium'>
                Chapter40
            </span>
            <ul className='flex justify-between items-center space-x-24 text-xl font-normal'>
                <li><a href="#">Contact Us</a></li>
                <li><PersonOutlineOutlinedIcon style={iconSize}/></li>
                <li><ShoppingCartOutlinedIcon style={iconSize}/></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar