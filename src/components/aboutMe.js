import React from 'react';
import { Redirect } from 'react-router-dom';


export default function AboutMe(props) {

    return (

        <section class="about-section text-center" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2 class="text-white mb-4">Bryant Davis</h2>
                        <p class="text-white-50">
                            Eight years enlisted in the Marine Corps, five of which were spent overseas, have
                            taught me to be agile and adaptable. I thrive in ever changing work environments,
                            utilizing my Lean Six Sigma training to prioritize tasks and enhance the efficiency
                            of any team I am on. My ideal role would be with a team that places an emphasis
                            on collaboration and communication.
                        </p>
                    </div>
                </div>
                <img class="img-fluid" src="assets/img/ipad.png" alt="" />
            </div>
        </section>
    )
}