import {useEffect, useRef} from "react";

const Hero = () => {

    const videoRef = useRef();

    useEffect(() =>  {
        if(videoRef.current) videoRef.current.playbackrate =2
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src='/title.png' alt="MacBook Title" />
            </div>

            <video src="/videos/hero.mp4" autoPlay muted playsInline />

            <button>Buy</button>

            <p>From $67 or $1738/mo for 67 months</p>
        </section>
    )
}

export default Hero