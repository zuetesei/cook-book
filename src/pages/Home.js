import React from 'react';
import LogInForm from '../components/LogInForm';

function Home() {

    return (
        <div className='home'>
            <section className="my-5">
                <h1> What is OnlyCooks? </h1>
                <div class="custom-shape-divider-bottom-1669850492">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </div>
                <div className="my-2">
                    <p>
                        OnlyCooks is a blogging site that helps to connect people who are
                        interested in cooking, creating, and sharing recipes! Come dicuss
                        anything with your fellow chefs about any types of cuisine, anytime,
                        any place, for any reason!
                    </p>
                </div>
            </section>
            <LogInForm />
        </div>
    )
}

export default Home;