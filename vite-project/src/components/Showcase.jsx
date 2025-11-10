import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive"
import gsap from "gsap";

const Showcase = () => {
    
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet){
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });
            timeline.to('.mask img', {
                transform: 'scale(1.1)'
            }).to('.content', { opacity: 1, y: 0, ease: 'power1.in'})
        }
    },[isTablet])
    
    return (
        <section id= "showcase">
            <div className = "media" >
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className ="mask">
                    <img src="/mask-logo.svg"/>
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>Introducing {" "}
                                <span className="text-white">
                                    M4, The next generation of apple silicon.
                                </span>  
                                . M4 powers
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book 
                            </p>
                            <p>
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p className="text-primary">Learn more about apple intelligence</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x Faster</h3>
                            <p>pro rednering performance than M2</p>
                        </div>
                    </div>
                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x Faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Showcase