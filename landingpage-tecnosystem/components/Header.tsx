import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";

const Header = async () => {
    const client = createClient();
    const page = await client.getSingle("home").catch(() => notFound());
    
  return (
    <div className="p-14 flex justify-between font-dm align-middle items-center">  
        {/* importando título da página para teste */}
        <div className="font-black text-black text-2xl flex gap-6 items-center">
            <PrismicNextImage field={page.data.tslogo} alt="" width={80}/>
            <PrismicRichText field={page.data.name} />
        </div>
        <nav>
              <ul className="flex gap-6 font-bold text-lg ">
                  {/* Navigation links */}
                  {/* chama o item de navegação e escolhe o index(link) e a info(label) */}
                  {page.data.navigation.map((link, label) => (
                      <li className="transition-all duration-300 text-xl uppercase ease-initial hover:text-red-600" key={label}>
                          <PrismicNextLink field={link.link[0]}>{link.label}</PrismicNextLink>
                      </li>
                  ))
                  }
              </ul>
        </nav>
    </div>
  )
}

export default Header