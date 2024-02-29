import './Home.css';

export default function Home(){
    return(
        <div className="homeContainer">
            <h1 className="title">Välkommen till min hemsida</h1>
            <h2 className='subTitle'>Lite formaterad text</h2>
            <p className='content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Neque similique reiciendis est odio fugiat dolorem quibusdam vitae? Optio porro natus placeat, 
            cumque illum odit quas quaerat quibusdam illo aspernatur recusandae.</p>
            <p className='content'>Detta är en enkel react sida med react router dom, på detta vis kan vi bygga en fullständig webbsida</p>
        </div>
    );
}


// export default Home;