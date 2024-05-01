const Home:React.FC = () => {
    return <div className="flex flex-col items-center">
        <div className="relative">
            <div className="w-screen h-220">
                <div className="w-full h-[70%] bg-Primary "></div>
                <div className="w-full h-[30%] bg-backGround "></div>
            </div>
            <div className="absolute w-full flex flex-col justify-center items-center top-20">
                <h1 className="pt-3 pb-3 font-bold text-3xl text-backGround">NewBat : L'informatique pour le batiment</h1>
                <h2 className="w-2/4 font-medium text-xl text-backGround text-center pb-14">Ne vous est il jamais arrivé de livrer un compte rendu d'intervention douteux au client ? D'avoir du mal à mener vos salariés la ou vous le souhaitiez ? De prendre les notes d'un devis puis de perdre la feuille ? Avec NewBat tout cela est terminé !</h2>
                <iframe className="w-250 h-180 rounded-2xl" src="https://www.youtube.com/embed/z0gpEHgiw-M" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
            </div>
        </div>
        {Array.from({ length: 20 }, (_, index) => (
        <div className="h-32 w-32 bg-Secondary pb-12" key={index}>Div {index + 1}</div>
      ))}
    </div>
}

export default Home;
