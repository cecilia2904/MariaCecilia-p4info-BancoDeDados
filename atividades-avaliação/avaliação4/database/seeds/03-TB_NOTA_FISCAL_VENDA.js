/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_NOTA_FISCAL_VENDA').del()
  await knex('TB_NOTA_FISCAL_VENDA').insert([
    {id: 1, codigo: "9", data: "29/05", valorNota: "131", cliente_id: "1", itemNotaFiscal_id: "10"},
    {id: 2, codigo: "8", data: "13/04", valorNota: "301", cliente_id: "2", itemNotaFiscal_id: "20"},
    {id: 3, codigo: "7", data: "01/01", valorNota: "121", cliente_id: "3", itemNotaFiscal_id: "30"},
  ]);
};
