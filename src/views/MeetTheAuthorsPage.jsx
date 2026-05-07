import { MenuBar } from "../components/menu-bar/MenuBar";
import { BottomCta } from "../components/bottom-cta/BottomCta";
import { AuthorSection } from "../components/author-section/AuthorSection";
import styles from "./meetTheAuthors.module.css";

const authors = [
  {
    name: "Edgar Allan Poe",
    side: "left",
    variant: "blue",
    bio: [
      'Known as the "Master of the Macabre," Edgar Allan Poe is most famous for his short stories and poems such as "The Raven" and "The Fall of the House of Usher." Death and psychological struggle are common themes in his work and his Masterworks.',
      "Poe's playstyle is aggressive. Craft decks focused on cards that grow stronger the more they die. Or, focus on spawning Regret token cards that damage your opponents.",
      "Overwhelm your opponents with your multitude of characters, with your Regrets, and conquer them forevermore!",
    ],
    images: [
      { src: "/assets/authors/poe-1.png", alt: "Edgar Allan Poe artwork" },
      { src: "/assets/authors/poe-2.jpg", alt: "Edgar Allan Poe artwork" },
    ],
  },
  {
    name: "H.P. Lovecraft",
    side: "right",
    variant: "amber",
    bio: [
      'The creator of "Eldritch Horror," H.P. Lovecraft’s most famous works include "The Call of Cthulhu," "At the Mountains of Madness," and "The Shadow over Innsmouth." His works reflect on forbidden knowledge, ancient entities, and the insignificance of humanity.',
      "Lovecraft will play slow before overwhelming his opponent with the power of the Deep Ones, and the Outer Gods. Awaken the Outer Gods, patiently summoning giant characters. Or Tear those trapped in the ocean depths.",
      "Ensure your opponents spiral into madness and have them despair at their insignificance in the face of your Great Ones!",
    ],
    images: [
      { src: "/assets/authors/lovecraft-1.png", alt: "H.P. Lovecraft artwork" },
      { src: "/assets/authors/lovecraft-2.png", alt: "H.P. Lovecraft artwork" },
    ],
  },
  {
    name: "Trapped Authors",
    side: "left",
    variant: "blue",
    bio: [
      "Our legendary Trapped Authors are Mary Shelley, Pu Songling, Ueda Akinari, Nikolai Gogol, Horacio Quiroga, and Bram Stoker. While each are legendary horror authors in their own right, each has been defeated by H.P. Lovecraft in his dubious plan to erase their works from history.",
      "But Lovecraft underestimated these literary masters. While succeeding to erase nearly all of their respective works, these authors and their most legendary creations refuse to be forgotten. They team up, forming the Erased archetype, centered around Erasing card effects and ensuring they are still in control of their narrative.",
      "Perfect for Masterworks beginners, the Erased archetype emphasizes simplifying opponents’ cards to write your perfect Masterwork and give these legends the respect they deserve.",
    ],
    images: [
      { src: "/assets/authors/trapped-1.jpg", alt: "Trapped Authors artwork" },
      { src: "/assets/authors/trapped-2.jpg", alt: "Trapped Authors artwork" },
      { src: "/assets/authors/trapped-3.jpg", alt: "Trapped Authors artwork" },
    ],
  },
];

export const MeetTheAuthorsPage = () => {
  return (
    <div>
      <MenuBar />
      <section
        className={styles.banner}
        style={{ backgroundImage: "url(/assets/authors/banner.jpg)" }}
      >
        <h1 className={styles.bannerTitle}>Meet the Authors</h1>
      </section>
      {authors.map((author) => (
        <AuthorSection key={author.name} {...author} />
      ))}
      <BottomCta />
    </div>
  );
};
