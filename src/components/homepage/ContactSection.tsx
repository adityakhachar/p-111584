import React, { useState } from "react";
import { BadgeWithIcon } from "@/components/ui/badge-with-icon";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="w-full overflow-hidden pt-[120px] max-md:max-w-full max-md:pl-5 max-md:pt-[100px]"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[81%] max-md:w-full max-md:ml-0">
          <div className="z-10 flex mr-[-70px] w-full flex-col items-center text-white font-semibold text-center max-md:max-w-full max-md:mt-10">
            <BadgeWithIcon
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cafcb09cc0611f2c26397e40b6ec32333b948c62?placeholderIfAbsent=true"
              text="Connect with Us"
              className="bg-white"
            />
            <h2 className="text-[50px] self-stretch mt-[19px] max-md:max-w-full max-md:text-[40px]">
              Are you ready to fortify your digital identity?
            </h2>

            {formSubmitted ? (
              <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md">
                Thank you for your message! We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md mt-6">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-md text-black"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-md text-black"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-3 rounded-md text-black"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <ButtonWithIcon
                  text="Let's Connect"
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a01d8c8c8a578dea718f6f407f1549527bc84363?placeholderIfAbsent=true"
                  variant="secondary"
                  className="mt-4"
                />
              </form>
            )}
          </div>
        </div>
        <div className="w-[19%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eea772c7d293f649f427f23b310a4e8561fcdcdd?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[257px] shrink-0 max-w-full mt-[55px] max-md:mt-10"
            alt="Contact Illustration"
          />
        </div>
      </div>
    </section>
  );
};
