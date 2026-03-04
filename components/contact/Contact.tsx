import Header from "../general/Header";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { LuSend } from "react-icons/lu";

const contactInfo = [
  {
    title: "Email",
    icon: <FaEnvelope className="h-6 w-6" />,
    value: "sanskritii.garg@gmail.com",
    link: "mailto:sanskritii.garg@gmail.com",
  },
  {
    title: "Linkedin",
    icon: <FaLinkedin className="h-6 w-6" />,
    value: "Sanskriti Garg",
    link: "https://www.linkedin.com/in/sanskritiigarg/",
  },
];

function Contact() {
  const inputStyle = "px-4 py-3 outline-none border border-primary rounded-md w-full focus:border-surface transition-colors mb-4 bg-surface/30";

  return (
    <section id="contact" className="py-16 lg:py-24">
      <Header title="Let's Collaborate?" />
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
        <div>
          <p className="mb-10 text-base lg:text-lg leading-relaxed">
            I am currently available for freelance and full-time opportunites.
            Whether you have a project in mind or just want to connect, feel
            free to reach out.
          </p>

          <div className="space-y-5 mb-12">
            {contactInfo.map((info, index) => (
              <Link
                href={info.link}
                key={index}
                className="group flex items-center gap-4 w-full px-2 py-3 transition-colors rounded-lg hover:bg-surface"
              >
                <div className="h-12 w-12 rounded-full bg-surface transition duration-100 group-hover:scale-105 grid place-items-center p-2">
                  {info.icon}
                </div>

                <div>
                  <p className="text-base font-medium">{info.title}</p>
                  <p className="text-base">{info.value}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* form */}
        <div>
          <form className="rounded-lg px-4 py-8 bg-primary/20">
            <input
              type="text"
              placeholder="Your Name"
              className={inputStyle}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Subject of the message"
              className={inputStyle}
            />
            <textarea placeholder="Your message" required className={`${inputStyle} resize-none`} rows={4}/>

            <button className="w-full bg-accent/70 font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-75">
              <LuSend />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
