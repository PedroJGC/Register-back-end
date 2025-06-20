import { Knex } from "knex"

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("products").del()

  // Inserts seed entries
  await knex("products").insert([
    {
      name: "Teclado",
      price: 120,
      stock: 50,
      description: "Teclado mecânico cougar",
    },
    {
      name: "Mouse",
      price: 80.99,
      stock: 10,
      description: "Mouse gamer Logitech",
    },
    {
      name: "Monitor",
      price: 1300,
      stock: 25,
      description: "Monitor 4K LG 27 polegadas",
    },
  ])
}
