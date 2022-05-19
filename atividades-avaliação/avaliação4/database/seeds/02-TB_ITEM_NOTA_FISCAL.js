/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_ITEM_NOTA_FISCAL').del()
  await knex('TB_ITEM_NOTA_FISCAL').insert([
    {id: 1, sequencial: '200', quantidade: "9", valor: "350.00", produto_id: "11", notaFiscal_id: "10", TipoCliente: "Pessoa_Fisica"},
    {id: 2, sequencial: '101', quantidade: "5", valor: "82.75", produto_id: "22", notaFiscal_id: "20", TipoCliente: "Pessoa_Juridica"},
    {id: 3, sequencial: '011', quantidade: "7", valor: "9.80", produto_id: "33", notaFiscal_id: "30", TipoCliente: "Pessoa_Fisica"},
  ]);
};
