import React from "react"

import styles from "./Menu.module.scss"
import { Section } from "./Section"

const dinnerSections: MenuSectionProps[] = [
  {
    title: "Appetizers",
    items: [
      { name: "Steamed Dumplings (6)", price: 6 },
      { name: "Fried Wonton  (6)", price: 8 },
      { name: "Egg Roll (4)", price: 9.5 },
      { name: "Fried Prawn (6)", price: 13 },
      { name: "B.B.Q. Pork", price: 10 },
      { name: "B.B.Q Spare Ribs (4)", price: 13 },
      {
        name: "Assorted Appetizers",
        price: 12,
        description:
          "For two, a combination of B.B.Q. Pork, Fried Prawn, Egg Roll, and Fried Wonton",
      },
      {
        name: "Crab Rangoon (8)",
        price: 10.5,
        description: "Fried wonton filled with crab meat, cream cheese, green onion, & ginger",
      },
      { name: "Pot Sticker (6)", price: 9 },
      { name: "Chicken Salad", price: 9.5 },
      {
        name: "Egg Roll, Soup & Steamed Rice Combo",
        price: 6,
        description: "with any entree order",
      },
      { name: "Sesame Ball (8)", price: 8.5 },
      { name: "Garlic Chicken Wing (6)", price: 8.5 },
    ],
  },
  {
    title: "Soup",
    items: [
      { name: "Wor Wonton Soup", type: "size", price: { small: 9.5, large: 13.5 } },
      { name: "Egg Drop Soup", type: "size", price: { small: 9.5, large: 13.5 } },
      { name: "Hot & Sour Soup", type: "size", price: { small: 9.5, large: 13.5 }, spiciness: 1 },
      { name: "Pickle Soup", type: "size", price: { small: 9.5, large: 13.5 }, spiciness: 1 },
      {
        name: "Pork with Szechuan Spinach Tofu Soup",
        type: "size",
        price: { small: 9, large: 13 },
      },
      { name: "Sizzling Rice Soup", type: "size", price: { small: 9.5, large: 14.5 } },
      { name: "Seafood Soup", type: "size", price: { small: 11, large: 15.5 } },
      { name: "Chicken with Cream Corn Soup", type: "size", price: { small: 10.5, large: 14.5 } },
      { name: "Miso Seaweed Soup", type: "size", price: { small: 9, large: 13 } },
    ],
    description: ["small: serves 2 to 3", "large: serves 4 to 5 "],
  },
  {
    title: "Beef",
    items: [
      { name: "Beef with Green Onion & Ginger", price: 15.5 },
      { name: "Beef with Vegetables", price: 14.5 },
      { name: "Beef with Broccoli", price: 14.5 },
      { name: "Beef with Snow Peas", price: 14.5 },
      { name: "Szechuan Beef", price: 15.5, description: "(or Hunan Beef)", spiciness: 1 },
      { name: "Mongolian Beef", price: 15.5, spiciness: 1 },
      { name: "Beef with Garlic Sauce", price: 15.5, spiciness: 1 },
      { name: "Beef with Scramble Egg", price: 15.5 },
      { name: "Kung Pao Beef", price: 15.5, spiciness: 1 },
      { name: "Orange Beef", price: 15.5 },
      { name: "Beef with Black Pepper", price: 16, spiciness: 1 },
      { name: "Sizzling Beef", price: 16 },
      { name: "Szechuan Boiled Beef", price: 17, spiciness: 2 },
    ],
  },
  {
    title: "Mushu Selection",
    items: [
      { name: "Mushu Pork", price: 12.5 },
      { name: "Mushu Chicken", price: 12.5 },
      { name: "Mushu Beef", price: 12.5 },
      { name: "Mushu Shrimp", price: 13.75 },
      { name: "Mushu Vegetable", price: 12.5 },
    ],
  },
  {
    title: "Seafood",
    items: [
      {
        name: "Happy Family",
        price: 17.95,
        description: "Assorted seafood with vegetables, pork, and beef",
      },
      {
        name: "Kung Pao Three Combo",
        price: 16,
        description:
          "Beef, scallops, and prawns sauteed with ginger, onion, and hot pepper in special sauce",
        spiciness: 1,
      },
      { name: "Honey Walnut Prawns", price: 16 },
      {
        name: "Match Maker's Shrimp",
        price: 17.95,
        description:
          "Shrimp with hot mandarin sauce and shrimp in white wine sauce match in one place",
        spiciness: 1,
      },
      {
        name: "Sizzling Seafood Combination",
        price: 17.95,
        description:
          "Prawns, scallops with baby corn and mushrooms simmered in blended sauce and served with crispy rice in a hot sizzling plate",
      },
      { name: "Pepper Salted Prawns", price: 17.95 },
      {
        name: "Garlic Scallops",
        price: 17.95,
        description:
          "Fried tender scallops sauteed with garlic, ginger, and green onion in our special sauce and garnished with garden greens",
        spiciness: 1,
      },
      {
        name: "Sauteed Scallop & Beef",
        price: 17.95,
        description: "Scallop, beef, and vegetables sauteed and served on a hot plate",
      },
      { name: "Prawns with Assorted Vegetables", price: 16.5 },
      { name: "Prawns with Snow Peas", price: 16.5 },
      { name: "Garlic Prawns", price: 16.5, spiciness: 1 },
      { name: "Kung Pao Prawns", price: 16.5, spiciness: 1 },
      { name: "Prawns with Broccoli", price: 16.5 },
      { name: "Prawns with Lobster Sauce", price: 16.5 },
      { name: "Sweet & Sour Prawns", price: 16.5 },
      { name: "Prawns with Cashew Nuts", price: 16.5 },
      { name: "Prawns with Black Bean Sauce", price: 16.5 },
      { name: "Curry Prawns", price: 16.5 },
      { name: "Prawns with String Bean", price: 16.5 },
      { name: "Crystal Szechuan Prawn", price: 16.5, spiciness: 1 },
      { name: "Fish Fillet with Mixed Vegetables", price: 16.5 },
      { name: "Sweet & Sour Fish Fillet", price: 16.5 },
      { name: "Fish Fillet in Black Bean Sauce", price: 16.5 },
      { name: "Crispy Fish Fillet in Hunan Sauce", price: 16.5, spiciness: 1 },
      { name: "Snow White Scallop", price: 16.5 },
      {
        name: "Three Ingredients",
        price: 16.5,
        description:
          "Prawns, scallops, and chicken breast sauteed with broccoli in a wine soy sauce",
      },
      { name: "Szechuan Boiled Fish", price: 17, spiciness: 2 },
    ],
  },
  {
    title: "Pork",
    items: [
      { name: "Twice Cooked Pork", price: 12.95, spiciness: 1 },
      { name: "Sweet & Sour Pork", price: 12.95 },
      { name: "B.B.Q. Pork with Vegetables", price: 12.95 },
      { name: "Pork Cherry Blossom", price: 12.95 },
      { name: "Shredded Pork with Garlic Sauce", price: 12.95, spiciness: 1 },
      { name: "Mandarin Spareribs", price: 12.95 },
      { name: "Pepper Salted Spare Ribs", price: 12.95 },
    ],
  },
  {
    title: "Poultry",
    items: [
      { name: "Orange Chicken", price: 13.5 },
      {
        name: "Rolling Lettuce Chicken",
        price: 13.5,
        description:
          "Minced chicken, black mushroom, and water chestnut served with lettuce, plum sauce, and green onion",
      },
      {
        name: "General Tso's Chicken",
        price: 13.5,
        description:
          "Chicken lightly breaded with ginger and green onion in chef's special sauce and garnished with broccoli",
        spiciness: 1,
      },
      {
        name: "Ginger Chicken",
        price: 13.5,
        description:
          "Authentic mandarin cooking, fried tender chicken breast in a fresh ginger and soy sauce",
      },
      { name: "Broccoli Chicken in Spicy Garlic Sauce", price: 13.5, spiciness: 1 },
      { name: "Chicken with Assorted Vegetables", price: 13.5 },
      { name: "Double Mushroom Chicken", price: 13.5 },
      { name: "Cashew Chicken", price: 13.5 },
      { name: "Sweet & Sour Chicken", price: 13.5 },
      { name: "Garlic Chicken", price: 13.5 },
      { name: "Lemon Chicken", price: 13.5 },
      {
        name: "Snow White Chicken",
        price: 13.5,
        description:
          "Snow peas and white chicken meat sauteed with garlic in a special white sauce",
      },
      { name: "Curry Chicken", price: 13.5 },
      { name: "Black Bean Sauce Chicken", price: 13.5 },
      { name: "Kung Pao Chicken", price: 13.5, spiciness: 1 },
      { name: "Chicken with Green Onion & Ginger", price: 13.5 },
      { name: "Sesame Chicken", price: 13.5 },
      { name: "Crispy Duck (half)", price: 17.5 },
    ],
  },
  {
    title: "Egg Foo Yang",
    items: [
      { name: "Veggie Egg Foo Yang", price: 11.75 },
      { name: "Chicken Egg Foo Yang", price: 11.75 },
      { name: "BBQ Pork Egg Foo Yang", price: 11.75 },
      { name: "Shrimp Egg Foo Yang", price: 12.25 },
    ],
  },
  {
    title: "Vegetables",
    items: [
      { name: "Broccoli Tofu in Spicy Garlic Sauce", price: 12, spiciness: 1 },
      { name: "Broccoli with Cashew", price: 12 },
      { name: "Deluxe Vegetables (Mixed Veggies)", price: 12 },
      { name: "Snow Peas, Water Chestnut", price: 12 },
      { name: "Garlic Green Bean", price: 12.5 },
      { name: "Snow Peas, Bamboo Shoots, Mushroom", price: 12.5 },
      { name: "Black Mushroom with Chinese Green", price: 13 },
      { name: "Hot Spicy Eggplant", price: 12, spiciness: 1 },
      { name: "Spicy Tofu", price: 12, spiciness: 1 },
      { name: "Tofu with Vegetables", price: 12 },
      {
        name: "Tofu Family Style",
        price: 13,
        description: "Light fried tofu with shrimp, chicken, beef, pork, and assorted vegetables",
      },
      { name: "Kung Pao Tofu", price: 12.5, spiciness: 1 },
    ],
  },
  {
    title: "Chow Mein",
    items: [
      { name: "Combination Chow Mein", price: 13 },
      { name: "Shrimp Chow Mein", price: 13 },
      { name: "Chicken Chow Mein", price: 10.5 },
      { name: "Beef Chow Mein", price: 10.5 },
      { name: "Pork Chow Mein", price: 10.5 },
      { name: "Vegetable Chow Mein", price: 10.5 },
      {
        name: "Pan Fried Noodle Hong Kong Style",
        price: 14,
        description:
          "Assorted seafood, chicken, B.B.Q. pork, Chinese veggies with special sauce over grilled noodles",
      },
      {
        name: "Soup Noodle",
        price: 13.5,
        description: [
          "Choice of beef, pork, chicken, or vegetables",
          "Shrimp or combination $1.00 extra",
        ],
      },
    ],
  },
  {
    title: "Chow Fun",
    items: [
      { name: "Combination Chow Fun", price: 13 },
      { name: "Beef Chow Fun", price: 12 },
      { name: "B.B.Q. Pork Chow Fun", price: 12 },
      { name: "Vegetable Chow Fun", price: 12 },
    ],
  },
  {
    title: "Fried Rice",
    items: [
      { name: "Combination Fried Rice", price: 13 },
      { name: "Shrimp Fried Rice", price: 13 },
      { name: "Chicken Fried Rice", price: 10.5 },
      { name: "Beef Fried Rice", price: 10.5 },
      { name: "Pork Fried Rice", price: 10.5 },
      { name: "Vegetable Fried Rice", price: 10.5 },
      { name: "White Rice", price: 2 },
      { name: "Brown Rice", price: 2.5 },
    ],
  },
]

const lunchSections: MenuSectionProps[] = [
  {
    title: "Specials",
    items: [
      { name: "Garlic Green Bean", price: 9.95 },
      { name: "Mixed Vegetable", price: 9.95 },
      { name: "Broccoli with Cashew", price: 9.95 },
      { name: "Sweet & Sour Pork (or Chicken)", price: 10.25 },
      { name: "Broccoli Beef", price: 10.25 },
      { name: "Broccoli Chicken In Spicy Garlic", price: 10.25, spiciness: 1 },
      { name: "Cashew Chicken or Almond Chicken", price: 10.25 },
      { name: "Beef with Vegetables", price: 10.25 },
      { name: "Black Bean Sauce Chicken", price: 10.25 },
      { name: "Double Mushroom Chicken", price: 10.25 },
      { name: "Curry Chicken", price: 10.25 },
      { name: "Mongolian Beef", price: 10.75, spiciness: 1 },
      { name: "Sesame Chicken", price: 10.75 },
      { name: "Kung Pao Tofu", price: 10.75, spiciness: 1 },
      { name: "Kung Pao Chicken", price: 10.75, spiciness: 1 },
      { name: "Szechuan Beef", price: 10.75, spiciness: 1 },
      { name: "Chicken with Assorted Vegetables", price: 10.75 },
      { name: "Lemon Chicken", price: 10.75 },
      { name: "Twice Cooked Pork", price: 10.75, spiciness: 1 },
      { name: "Black Bean Sauce Prawns", price: 12.5 },
      { name: "Kung Pao Prawns", price: 12.5, spiciness: 1 },
      { name: "Shrimp with Assorted Vegetables", price: 12.5 },
      { name: "Szechuan Prawns", price: 12.5, spiciness: 1 },
      { name: "Broccoli Shrimp", price: 12.5 },
      { name: "Sweet & Sour Prawns", price: 12.5 },
      { name: "Spicy Garlic Prawns", price: 12.5, spiciness: 1 },
      { name: "Prawns with Green Beans", price: 12.5 },
    ],
    description: [
      "Served with Egg Roll, Hot & Sour Soup or Wonton Soup, Steamed Rice or Fried Rice",
      "Cup Soup $3.00 extra",
    ],
  },
  {
    items: [
      {
        name: "Chow Mein or Chow Fun",
        price: 12,
        description: [
          "Choice of Beef, Pork, Chicken, or Vegetables",
          "Shrimp or Combination $1.00 Extra",
        ],
      },
      { name: "Pan Fried Noodle Hong Kong Style", price: 15 },
    ],
    description: "The following items are not served with rice",
  },
]

export const Menu: React.FC = () => {
  return (
    <Section id="menu">
      <div className={styles.menu}>
        <h2 className={styles.title}>Menu</h2>
        <h3 className={styles.mealTitle}>Lunch</h3>
        <span className={styles.description}>Monday - Saturday: 11:30am - 2:30pm</span>
        <div className={styles.section}>
          {lunchSections.map((section) => {
            return (
              <MenuSection
                key={JSON.stringify(section.title ?? section.description)}
                {...section}
              />
            )
          })}
        </div>
        <h3 className={styles.mealTitle}>Dinner</h3>
        <span className={styles.description}>Sunday - Thursday: 4:30pm - 9:30pm</span>
        <span className={styles.description}>Friday - Saturday: 4:30pm - 9:30pm</span>
        <div className={styles.section}>
          {dinnerSections.map((section) => (
            <MenuSection key={section.title} {...section} />
          ))}
          <span className={styles.description}>
            <span className={styles.itemIcons}>🌶️</span> spicy
          </span>
        </div>
      </div>
    </Section>
  )
}

interface MenuSectionProps {
  title?: string
  items: MenuItemProps[]
  description?: string | string[]
}

const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  items,
  description,
}: MenuSectionProps) => {
  return (
    <section>
      <h4 className={styles.sectionTitle}>{title}</h4>
      {(typeof description === "string" ? [description] : description)?.map((text) => (
        <span key={text} className={styles.description}>
          {text}
        </span>
      ))}
      <ul>
        {items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </ul>
    </section>
  )
}

interface MenuItemBaseProps {
  name: string
  description?: string | string[]
  spiciness?: 0 | 1 | 2
  vegetarian?: boolean
  vegan?: boolean
  glutenFree?: boolean
}

interface MenuItemStandardProps extends MenuItemBaseProps {
  type?: "standard"
  price: number
}

interface MenuItemSizeProps extends MenuItemBaseProps {
  type: "size"
  price: {
    small: number
    large: number
  }
}

const priceFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })

type MenuItemProps = MenuItemStandardProps | MenuItemSizeProps

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  spiciness = 0,
  type,
  price,
}: MenuItemProps) => {
  const priceString =
    type === "size"
      ? `sm:\u00a0${priceFormatter.format(
          price.small
        )}\u00a0\u00a0\u00a0lg:\u00a0${priceFormatter.format(price.large)}`
      : priceFormatter.format(price)
  return (
    <li>
      <span className={styles.item}>
        <h5 className={styles.itemTitle}>
          {name}
          {spiciness && <span className={styles.itemIcons}>{new Array(spiciness).fill("🌶️")}</span>}
        </h5>
        <span className={styles.itemPrice}>{priceString}</span>
      </span>
      {(typeof description === "string" ? [description] : description)?.map((text) => (
        <span key={text} className={styles.description}>
          {text}
        </span>
      ))}
    </li>
  )
}
