import { React, useRef } from 'react';
import jsonp from 'jsonp';
import queryString from 'query-string';

export let scrollTo;

function Newsletter() {
  
  let someProperty = useRef(null);
  
  scrollTo = () => {
    console.log('someProperty', someProperty);

    someProperty.current.scrollIntoView({behavior: "smooth"});
  }

  // const subscribeToNewsLetter = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     email: e.target.email.value
  //   };
  //   console.log('formData', formData);
  //   jsonp(`https://gmail.us10.list-manage.com/subscribe/post/subscribe/post-json?u=a233a3863ffc520122705eefa&amp;id=cb0625de11&${queryString.stringify(formData)}`, { param: 'c' }, (err, data) => {
  //     console.log('err:', err);
  //     console.log('data:', data);
  //   });
  // }
  
  return (  
    <section>
      {/* Begin Mailchimp Signup Form */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl" id="elementToScroll" ref={someProperty}>
                <h3 className="h3 text-white mb-2">Subscribe to our emailing list!</h3>
                <p className="text-gray-300 text-lg mb-6">Make sure to never miss a workshop or event by subscribing! Always get the latest updates/flyers directly to your inbox.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" name='email'/>
                    <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow">Subscribe</a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">We promise not to spam you... unless you want us to.</p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
