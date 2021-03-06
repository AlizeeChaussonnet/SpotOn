import { Link } from "react-router-dom";

import image1 from "../../assets/img/illustration_meilleurs.png";
import image2 from "../../assets/img/illustration_achat.png";
import image3 from "../../assets/img/illustration_communaute.png";
import image4 from "../../assets/img/illustration_multiplateforme.png";
import image5 from "../../assets/img/illustration_help.png";
import logo from "../../assets/img/logo_temp.png";

import BlocHomePage from "../../components/BlocHomePage";
import FooterHomePageB2C from "../../components/FooterHomePageB2C";
import BlocCategoryHomePage from "../../components/BlocCategoryHomePage";
import Register from "../../components/Register";
import { Carousel } from "3d-react-carousal";

export default function HomePage() {
  let slides = [
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/0yT5DsGZErc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>,
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/bqHNs-m3fBs"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>,
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/70dsmyclR3o"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>,
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Xu-FLmk7t5Y"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>,
  ];

  return (
    <div className="contain-home">
      <section className="contain-scroll">
        <div className="background-cover contain-scroll relative">
          <Link to="/studios">
            <p className="banner-red text-xl py-2 cursor-pointer">
              Vous ??tes un pro, un studio, un coach .... C'est par ici !
            </p>
          </Link>
          <img src={logo} className="logo-homepage" alt="logo" />
          <BlocCategoryHomePage />
          <div className="carousel">
            <Carousel slides={slides} interval={1000} />
          </div>
          <Register studio={true} />
        </div>
      </section>
      <section className="contain-scroll">
        <p className="banner-red">Plus de vid??os</p>
        <BlocHomePage
          titleBanner={"Les Meilleurs Pros chez toi"}
          textBloc={
            "Aujourd'hui depuis votre salon, demain ?? l'h??tel ou chez votre copine Marie... Spot on vous suit par- tout et est accessible depuis tous vos ??crans          T??l?? ordinateur , smartphone ou tablette aucune excuse pour rater la s??ance. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sec diam nonummy nion eu smod tincidunt ut lapreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lebortis nisl ut aliquip ex ea commodo consequat. Dus autern vel eut iriure delon in hendre rit in vulnutate velit esse molestie consequat, vel illum delore eu feugiat nulla facitisis at vero eros et accumsan et luste edio dignissim qui blandit praesent lup"
          }
          image={image1}
          wayPicture={"right"}
        />
        <BlocHomePage
          titleBanner={"Ach??te les cr??dits dont tu as besoin"}
          textBloc={
            "Pas d'abonnement ! Pas d'engagement ! Pas de bague au doigt ! Tu n'ach??te que ce dont tu as besoin ... mais on est surs que tu seras vite accro ?? ta s??ance de live, au cours de yoga et ?? celui d'aquarelle. 1 cr??dit/ 5 cr??dits / 20 cr??dits / 100 cr??dits ?? toi de voir"
          }
          image={image2}
          wayPicture={"left"}
        />
        <BlocHomePage
          titleBanner={"Retrouve tes amis"}
          textBloc={
            "Chacun chez soi mais tous ensemble ! A plusieurs c'est quand m??me plus sympa et ??a permet de se motiver... Stop aux tricheurs ! Quoi ? Marie, tu as zapp?? les 32 pompes ? Cr???? ton espace d??di??, connecte tes amis et faites en m??me temps le m??me cours ! Sport, Pilate, Aquarelle, quoi de mieux que de progresser ensemble ?"
          }
          image={image3}
          wayPicture={"right"}
        />
      </section>
      <section className="contain-scroll bg-[#e6e6e6]">
        <p className="banner-red">Cr??er mon compte</p>
        <div className="flex md:mx-20 md:flex-row flex-col sm:mx-0">
          <BlocHomePage
            titleBanner={"Un acc??s Multi-plateformes"}
            textBloc={
              "Aujourd'hui depuis ton salon, demain ?? l'h??tel ou chez ta copine Marie... Spot-On te suis partout et est accessible depuis tous les ??crans, quelque soit l'heure du jour ou de la nuit. T??l??, ordinateur, smartphone ou tablette, les meilleurs pofessionnels seront toujours la pour t'??pauler dans tes challenges."
            }
            image={image4}
            wayPicture={"down"}
          />
          <BlocHomePage
            titleBanner={"Besoin d'aide"}
            textBloc={
              "Tu souhaites parler au Coach ? Tu as un probl??me technique, des questions sur ton compte ? Pas de soucis, nous sommes la pour te r??pondre"
            }
            image={image5}
            wayPicture={"down"}
          />
        </div>
      </section>
      <section>
        <FooterHomePageB2C />
      </section>
    </div>
  );
}
