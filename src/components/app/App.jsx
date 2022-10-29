import AppHeader from "../appHeader/AppHeader";
import RandomHero from "../randomHero/RandomHero";
import HeroList from "../heroList/HeroList";
import HeroInfo from "../heroInfo/HeroInfo";
// import AppBanner from "../appBanner/AppBanner";
// import ComicsList from "../comicsList/ComicsList";
// import ComicsInfo from "../comicsInfo/ComicsInfo";
import visionDecor from '../../img/vision.png';
import Skeleton from "../skeleton/Skeleton";

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <main>
                <RandomHero />
                <div>
                    <HeroList />
                    <Skeleton />
                    {/* <HeroInfo /> */}
                </div>
                <img className="vision" src={visionDecor} alt="vision decoration" />
            </main>
        </div>
    )
}

export default App;