'use client';

import { Icon } from '@iconify/react';
import Marquee from "react-fast-marquee";

const logos = [
    { icon: "logos:nextjs-icon", label: "Next.js" },
    { icon: "logos:stripe", label: "Stripe" },
    { icon: "logos:aws", label: "AWS" },
    { icon: "logos:google-cloud", label: "GCP" },
    { icon: "logos:meta-icon", label: "Meta" },
    { icon: "simple-icons:ycombinator", label: "Y Combinator", color: "#ff4d00ff" },
    { icon: "logos:supabase-icon", label: "Supabase" },
    { icon: "logos:tailwindcss-icon", label: "Tailwind" },
    { icon: "logos:github-icon", label: "GitHub" },
    { icon: "logos:netflix-icon", label: "Netflix" },
    { icon: "logos:spotify-icon", label: "Spotify" },
    { icon: "logos:slack-icon", label: "Slack" },
    { icon: "logos:discord-icon", label: "Discord" },
    { icon: "logos:airbnb-icon", label: "Airbnb" },
    { icon: "simple-icons:openai", label: "OpenAI" },
    { icon: "simple-icons:anthropic", label: "Anthropic" },
    { icon: "logos:microsoft-icon", label: "Microsoft" },
];

const Logos = () => {
    return (
        <div className="w-full bg-black py-16 border-y border-white/5 relative">
            <div className="flex flex-col items-center gap-12">
                <p className="text-[20px] font-black tracking-[0.4em] text-white/20 uppercase">
                    Trusted by industry leaders
                </p>

                <Marquee
                    gradient={true}
                    gradientColor="black"
                    gradientWidth={200}
                    speed={50}
                    pauseOnHover={true}
                    className="overflow-hidden"
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center mx-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                        >
                            <Icon
                                icon={logo.icon}
                                width="58"
                                height="58"
                                style={logo.color ? { color: logo.color } : {}}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Logos;