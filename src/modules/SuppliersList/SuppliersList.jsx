import s from './SuppliersList.module.css'

const SuppliersList = ({suppliers}) => {

    return (
        <div>
          <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Title</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {suppliers.map(({id, avatarLink, companyName, name, title, city, country}) => (
                    <tr key={id}>
                        <td>
                            <div className={s.avatar_img}>
                                <img src={avatarLink} alt="Contact letters" /></div>
                          </td>
                        <td>{companyName}</td>
                        <td>{name}</td>
                        <td>{title}</td>
                        <td>{city}</td>
                        <td>{country}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
    )
}

export default SuppliersList