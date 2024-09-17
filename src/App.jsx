import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './App.css'
import NavbarCustom from './components/Navbar/Navbar'
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import MainSection from './components/MainSection/MainSection'
import Footer from './components/Footer/Footer'

const App = () => {
    const warinng = () => {
        alert("Hello in my ass")
    }
    return (
        <>
            <NavbarCustom />

            <WelcomeSection 
                warinng={warinng}
            />

            <MainSection  />

            <Footer />
        </>
    )
}

export default App
