import { Children, FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next/pages";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="m-20"
    > 
    {/* Nome da Empresa */}
      <PrismicRichText field={slice.primary.nome_da_empresa} components={{
        heading3: ({ children }) => <h3 className="text-lg mb-2 font-black text-red-600 font-righteous">{children}</h3>,
      }}/> 

      {/* Títlo do Hero */}
      <PrismicRichText
        field={slice.primary.hero_text}
        components={{
          heading1: ({ children }) => (
            <h1 className="text-6xl font-righteous font-bold mb-4 text-black">
              {children}
            </h1>
          ),
          strong: ({ children }) => (
            <span className="text-red-600">{children}</span>
          ),
        }}
      />


      {/* Tópicos de Subtítulo */}
      {slice.primary.topicos_hero.map((item, index) => (
        <div className="flex gap-2">
          <i className="bi bi-check-circle-fill text-red-600"></i>
          <PrismicRichText key={index} field={item.texto} components={{ paragraph: ({ children }) => (
            <p className="uppercase">
              {children}
            </p>
          )}}/>
        </div>
      ))}

      {/* botão contate-nos */}
      <div className="flex gap-2 mt-6 text-md font-bold text-white">
      <PrismicNextLink field={slice.primary.button_contate} className="p-2 bg-red-600 rounded-md" />
      <PrismicNextLink field={slice.primary.button_saibamais} className="p-2 border border-red-600 text-red-600 rounded-md" />
      </div>
    </section>
  );
};

export default Hero;
