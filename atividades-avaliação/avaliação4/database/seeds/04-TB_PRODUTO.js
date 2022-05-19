/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_PRODUTO').del()
  await knex('TB_PRODUTO').insert([
    {id: 1, codigo: '011', descricao: "Circular 1", valor: 1.80},
    {id: 2, codigo: '605', descricao: "BR AV.I", valor: 100000},
    {id: 3, codigo: '855', descricao: "SALINAS", valor: 500},
  ]);
};
