import { NavLink } from "react-router-dom"
import s from "./navbar.module.css"

const Navbar = () => {
return (
 <aside className={s.menu}>
    <div className={s.title}><p><span className={s.weight}>Northwind</span> Traders</p></div>
    <p className={s.block_title}>GENERAL</p>
    <NavLink to="/" className={s.link}>Home</NavLink>
    <NavLink to="/dash" className={s.link}>Dashboard</NavLink>
    <p className={s.block_title}>BACKOFFICE</p>
    <NavLink to="/suppliers" className={s.link}>Suppliers</NavLink>
    <NavLink to="/products" className={s.link}>Products</NavLink>
    <NavLink to="/orders" className={s.link}>Orders</NavLink>
    <NavLink to="/employees" className={s.link}>Employees</NavLink>
    <NavLink to="/customers" className={s.link}>Customers</NavLink>
    <NavLink to="/search" className={s.link}>Search</NavLink>
</aside>
)
}

export default Navbar