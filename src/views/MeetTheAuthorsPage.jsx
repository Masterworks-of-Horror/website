import { MenuBar } from "../components/menu-bar/MenuBar";
import { BottomCta } from "../components/bottom-cta/BottomCta";
import { AuthorSection } from "../components/author-section/AuthorSection";
import styles from "./meetTheAuthors.module.css";

const authors = [
  {
    name: "Edgar Allan Poe",
    portrait: "/assets/authors/edgarallenpoe.png",
    variant: "blue",
    bio: [
      'Known as the "Master of the Macabre", Edgar Allan Poe is most famous for his short stories and poems such as "The Raven" and "The Fall of the House of Usher."',
      "His themes of death and psychological struggle have been directly reflected in our approach to any card belonging to his stories.",
      "Poe's playstyle revolves around the death of your cards and the benefits your sacrifice brings. Kill your characters, resurrect them, and keep the literary battle going with this author.",
    ],
    cards: [
      {
        src: "/assets/authors/fortunatofinalplea.png",
        alt: "Fortunato's Final Plea",
      },
      { src: "/assets/authors/theblackroom.png", alt: "The Black Room" },
      { src: "/assets/authors/nevermore.png", alt: "Nevermore" },
      {
        src: "/assets/authors/caskofamontillado.png",
        alt: "Cask of Amontillado",
      },
    ],
  },
  {
    name: "H.P. Lovecraft",
    portrait: "/assets/authors/hplovecraft.png",
    variant: "amber",
    bio: [
      'The Creator of "Cosmic Horror", H.P. Lovecraft is Synonymous with strange and bewildering beings from the far reaches of space. His most famous works include "The Call of Cthulhu", "At the Mountains of Madness", and "The Shadow over Innsmouth."',
      "Lovecraft's themes of Ancient entities, rituals, and Hulking beasts are demonstrated in our game through the use of powerful characters and cards to boost their stats.",
      "Lovecraft's playstyle revolves around controlling his opponents and summoning unstoppable monsters. Decide what cosmic horrors you will conjure to your aid.",
    ],
    cards: [
      { src: "/assets/authors/nercronomicon.png", alt: "Necronomicon" },
      { src: "/assets/authors/cthlhu.png", alt: "Cthulhu" },
      { src: "/assets/authors/azatboth.png", alt: "Azathoth" },
      { src: "/assets/authors/cityofrlyeh.png", alt: "The City of R'lyeh" },
    ],
  },
];

export const MeetTheAuthorsPage = () => {
  return (
    <div>
      <MenuBar />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <img
            src="/assets/authors/mta.png"
            alt="Meet The Authors"
            className={styles.heroPortrait}
          />
          <div className={styles.heroText}>
            <h3>Meet The Authors</h3>
            <p>
              Masterworks of Horror would be nothing without the amazing stories
              and tales from the past.
            </p>
            <p>
              These are the amazing authors and their works that bring our game
              to life.
            </p>
          </div>
        </div>
      </section>
      {authors.map((author) => (
        <AuthorSection key={author.name} {...author} />
      ))}
      <BottomCta />
    </div>
  );
};
