import s from './HomePage.module.css'

const HomePage = () => {
    return (
        <section className={s.main_section}>
            <div className={s.card_content}>
            <p className={s.text_title}>Welcome to Northwind Traders</p>
            </div>
        </section>
    )
}


export default HomePage;