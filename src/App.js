import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './modules/NavBar/Navbar';
import Nav from './modules/Nav/Nav';
import HomePage from './pages/HomePage/HomePage.jsx';
import CustomersPage from './pages/CustomersPage/CustomersPage';
import DashboardPage from './pages/DashboardPage/DashboardPage.jsx';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import SearchPage from './pages/SearchPage/SearchPage';
import SuppliersPage from './pages/SuppliersPage/SuppliersPage';

import SupplierDetailsPage from './pages/SupplierDetailsPage/SupplierDetailsPage';
import ProductsDetailsPage from './pages/ProductsDetailsPage/ProductsDetailsPage';
import OrderDetailsPage from './pages/OrdersDetailsPage/OrdersDetailsPage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage/EmployeeDetailsPage';
import CustomerDetailsPage from './pages/CustomerDetailsPage/CustomerDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dash" element={<DashboardPage />} />

        <Route path="/suppliers" element={<SuppliersPage />} />
        <Route path="/supplier/:id" element={<SupplierDetailsPage />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductsDetailsPage />} />

        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/order/:id" element={<OrderDetailsPage />} />

        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/employee/:id" element={<EmployeeDetailsPage />} />

        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/customer/:id" element={<CustomerDetailsPage />} />

        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
