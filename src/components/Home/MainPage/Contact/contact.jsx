import SectionHeader from "@/components/Utils/MainPage/section-header";
import { Flame, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full border px-1 md:pl-2 pb-2 pt-10 rounded-xl">
      <SectionHeader
        icon={<Flame />}
        title={"Contact"}
        heading={"Contact Us!"}
        description={"Contact us to get more about Target Academy of Science"}
      />
      <div className="flex flex-col md:flex-row gap-4 mt-10">
        <div className="w-full md:w-[60%] p-2">
          <div className="w-full h-full border rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.777726095378!2d79.32058931095153!3d20.840680294131467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4ab906d17c915%3A0x6251a323bad51b1b!2sTarget%20Academy%20Of%20Science!5e0!3m2!1sen!2sin!4v1737567780838!5m2!1sen!2sin"
              className="w-full min-h-[350px]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="py-2 px-2 md:px-0 md:pr-4 md:w-[40%]">
          <div className="bg-background rounded-lg border p-6">
            <ul>
              <li className="flex line-clamp-2 gap-4 mb-3">
                <MapPin /> Adyalwale lay out By-Pass Road Umread, Nagpur
                Maharashtra
              </li>
              <li className="flex gap-4 mb-3">
                <Phone /> <a href="tel:+911234567890">+91 1234567890</a>
              </li>
              <li className="flex gap-4 mb-3">
                <Mail /> <a href="mailto:abc@gmail.com">abc@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="bg-background rounded-lg border p-6 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque
            ipsa suscipit, fugit quibusdam quo quae ullam? Consectetur, labore
            ipsum cumque in modi praesentium. Harum sunt quibusdam non natus
            necessitatibus!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
